import type { Request, Response } from 'express';
import { db } from '../db/index.js';
import { studentProfiles, careerTracks, studentProgress, mentorChats } from '../db/schema.js';
import { eq, and } from 'drizzle-orm';
import { z } from 'zod';
import type { CareerTrack } from '../../shared/types.js';

function formatTrack(row: any): CareerTrack {
  return {
    id: row.id,
    slug: row.slug,
    title_en: row.titleEn,
    title_bn: row.titleBn,
    summary_en: row.summaryEn,
    summary_bn: row.summaryBn,
    pivotAdvice_en: row.pivotAdviceEn,
    pivotAdvice_bn: row.pivotAdviceBn,
    minPcRequired: row.minPcRequired,
    dayToDay_en: row.dayToDayJson?.en || [],
    dayToDay_bn: row.dayToDayJson?.bn || [],
    mustHaveSkills: row.mustHaveSkillsJson || [],
    marketData: row.marketDataJson,
    roadmapPhases: row.roadmapPhasesJson || [],
    interviewQuestions: row.interviewQuestionsJson || [],
    freeCerts: row.freeCertsJson || [],
  };
}

export async function getProfileBySaveCode(req: Request, res: Response) {
  try {
    const rawCode = req.params.saveCode;
    if (!rawCode) {
      return res.status(400).json({ success: false, message: 'Save code is required' });
    }
    const saveCode = String(rawCode).toUpperCase();

    const profiles = await db.select().from(studentProfiles).where(eq(studentProfiles.saveCode, saveCode)).limit(1);
    if (profiles.length === 0) {
      return res.status(404).json({ success: false, message: 'Profile not found with this Save Code' });
    }

    const profile = profiles[0];
    let primaryTrack: CareerTrack | null = null;
    let secondaryTrack: CareerTrack | null = null;

    if (profile.primaryTrackId) {
      const pRows = await db.select().from(careerTracks).where(eq(careerTracks.id, profile.primaryTrackId)).limit(1);
      if (pRows.length > 0) primaryTrack = formatTrack(pRows[0]);
    }

    if (profile.secondaryTrackId) {
      const sRows = await db.select().from(careerTracks).where(eq(careerTracks.id, profile.secondaryTrackId)).limit(1);
      if (sRows.length > 0) secondaryTrack = formatTrack(sRows[0]);
    }

    // Get student progress
    const progressRows = await db.select().from(studentProgress).where(
      eq(studentProgress.studentId, profile.id)
    );

    // Get recent chat history
    const chats = await db.select().from(mentorChats).where(
      eq(mentorChats.studentId, profile.id)
    ).limit(20);

    return res.json({
      success: true,
      profile: {
        id: profile.id,
        saveCode: profile.saveCode,
        name: profile.name,
        phoneOrRoll: profile.phoneOrRoll,
        languagePref: profile.languagePref,
        hardwareTier: profile.hardwareTier,
        pcLiteracy: profile.pcLiteracy,
        englishLevel: profile.englishLevel,
        urgencyLevel: profile.urgencyLevel,
        interestArea: profile.interestArea,
        verdict: profile.verdictData,
        createdAt: profile.createdAt,
      },
      primaryTrack,
      secondaryTrack,
      progress: progressRows[0] || {
        completedMilestoneIds: [],
        completedCertIds: [],
        completedSkillIds: [],
      },
      chats,
    });
  } catch (error: any) {
    console.error('Error fetching profile:', error);
    return res.status(500).json({ success: false, message: 'Failed to retrieve profile' });
  }
}

const progressSchema = z.object({
  saveCode: z.string().min(1),
  trackId: z.number().int().positive(),
  completedMilestoneIds: z.array(z.string()).optional(),
  completedCertIds: z.array(z.string()).optional(),
  completedSkillIds: z.array(z.string()).optional(),
});

export async function updateProgress(req: Request, res: Response) {
  try {
    const parse = progressSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ success: false, errors: parse.error.issues });
    }

    const { saveCode, trackId, completedMilestoneIds, completedCertIds, completedSkillIds } = parse.data;

    const profiles = await db.select().from(studentProfiles).where(eq(studentProfiles.saveCode, saveCode.toUpperCase())).limit(1);
    if (profiles.length === 0) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }
    const studentId = profiles[0].id;

    const existingProgress = await db.select().from(studentProgress).where(
      and(eq(studentProgress.studentId, studentId), eq(studentProgress.trackId, trackId))
    ).limit(1);

    if (existingProgress.length > 0) {
      const updated = await db.update(studentProgress).set({
        completedMilestoneIds: completedMilestoneIds ?? existingProgress[0].completedMilestoneIds,
        completedCertIds: completedCertIds ?? existingProgress[0].completedCertIds,
        completedSkillIds: completedSkillIds ?? existingProgress[0].completedSkillIds,
        updatedAt: new Date(),
      }).where(eq(studentProgress.id, existingProgress[0].id)).returning();

      return res.json({ success: true, progress: updated[0] });
    } else {
      const inserted = await db.insert(studentProgress).values({
        studentId,
        trackId,
        completedMilestoneIds: completedMilestoneIds || [],
        completedCertIds: completedCertIds || [],
        completedSkillIds: completedSkillIds || [],
      }).returning();

      return res.json({ success: true, progress: inserted[0] });
    }
  } catch (error: any) {
    console.error('Error updating progress:', error);
    return res.status(500).json({ success: false, message: 'Failed to update progress' });
  }
}

export async function switchTrack(req: Request, res: Response) {
  try {
    const { saveCode, trackSlug } = req.body;
    if (!saveCode || !trackSlug) {
      return res.status(400).json({ success: false, message: 'saveCode and trackSlug are required' });
    }

    const profiles = await db.select().from(studentProfiles).where(eq(studentProfiles.saveCode, saveCode.toUpperCase())).limit(1);
    if (profiles.length === 0) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }

    const tracks = await db.select().from(careerTracks).where(eq(careerTracks.slug, trackSlug)).limit(1);
    if (tracks.length === 0) {
      return res.status(404).json({ success: false, message: 'Track not found' });
    }

    const newTrack = tracks[0];
    await db.update(studentProfiles).set({
      primaryTrackId: newTrack.id,
    }).where(eq(studentProfiles.id, profiles[0].id));

    return res.json({ success: true, newTrack: formatTrack(newTrack) });
  } catch (error: any) {
    console.error('Error switching track:', error);
    return res.status(500).json({ success: false, message: 'Failed to switch track' });
  }
}
