import type { Request, Response } from 'express';
import { db } from '../db/index.js';
import { careerTracks } from '../db/schema.js';
import { eq } from 'drizzle-orm';
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

export async function getAllTracks(req: Request, res: Response) {
  try {
    const rows = await db.select().from(careerTracks);
    const tracks = rows.map(formatTrack);
    return res.json({ success: true, tracks });
  } catch (error: any) {
    console.error('Error fetching career tracks:', error);
    return res.status(500).json({ success: false, message: 'Failed to retrieve career tracks' });
  }
}

export async function getTrackBySlug(req: Request, res: Response) {
  try {
    const rawSlug = req.params.slug;
    if (!rawSlug) {
      return res.status(400).json({ success: false, message: 'Slug is required' });
    }
    const slug = String(rawSlug);
    const rows = await db.select().from(careerTracks).where(eq(careerTracks.slug, slug)).limit(1);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Career track not found' });
    }
    return res.json({ success: true, track: formatTrack(rows[0]) });
  } catch (error: any) {
    console.error('Error fetching track by slug:', error);
    return res.status(500).json({ success: false, message: 'Failed to retrieve track' });
  }
}
