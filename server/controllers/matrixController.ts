import type { Request, Response } from 'express';
import { languagesMatrix, skillsMatrix, interestsMatrix } from '../data/languageSkillsMatrix.js';
import { db } from '../db/index.js';
import { careerTracks } from '../db/schema.js';

export async function getLanguagesMatrix(req: Request, res: Response) {
  try {
    return res.json({
      success: true,
      languages: languagesMatrix,
    });
  } catch (error: any) {
    console.error('Error fetching languages matrix:', error);
    return res.status(500).json({ success: false, message: 'Failed to retrieve languages matrix' });
  }
}

export async function getSkillsMatrix(req: Request, res: Response) {
  try {
    return res.json({
      success: true,
      skills: skillsMatrix,
    });
  } catch (error: any) {
    console.error('Error fetching skills matrix:', error);
    return res.status(500).json({ success: false, message: 'Failed to retrieve skills matrix' });
  }
}

export async function getInterestsMatrix(req: Request, res: Response) {
  try {
    return res.json({
      success: true,
      interests: interestsMatrix,
    });
  } catch (error: any) {
    console.error('Error fetching interests matrix:', error);
    return res.status(500).json({ success: false, message: 'Failed to retrieve interests matrix' });
  }
}

export async function getMatrixOverview(req: Request, res: Response) {
  try {
    const tracks = await db.select().from(careerTracks);
    
    // Build reverse index: for each track, summarize its programming languages, skills, and matched interests
    const roadmapSummary = tracks.map((t) => {
      const associatedLangs = languagesMatrix
        .filter((l) => l.associatedRoadmaps.some((r) => r.trackSlug === t.slug))
        .map((l) => {
          const match = l.associatedRoadmaps.find((r) => r.trackSlug === t.slug)!;
          return {
            id: l.id,
            name: l.name,
            importance: match.importance,
            role_en: match.roleInRoadmap_en,
            role_bn: match.roleInRoadmap_bn,
          };
        });

      const associatedSkills = skillsMatrix
        .filter((s) => s.associatedRoadmaps.some((r) => r.trackSlug === t.slug))
        .map((s) => {
          const match = s.associatedRoadmaps.find((r) => r.trackSlug === t.slug)!;
          return {
            id: s.id,
            name: s.name,
            importance: match.importance,
          };
        });

      const matchedInterests = interestsMatrix
        .filter((i) => i.matchingRoadmaps.some((m) => m.trackSlug === t.slug))
        .map((i) => ({
          id: i.id,
          title_en: i.title_en,
          title_bn: i.title_bn,
        }));

      return {
        slug: t.slug,
        title_en: t.titleEn,
        title_bn: t.titleBn,
        summary_en: t.summaryEn,
        summary_bn: t.summaryBn,
        languages: associatedLangs,
        skills: associatedSkills,
        interests: matchedInterests,
      };
    });

    return res.json({
      success: true,
      languages: languagesMatrix,
      skills: skillsMatrix,
      interests: interestsMatrix,
      roadmaps: roadmapSummary,
    });
  } catch (error: any) {
    console.error('Error generating matrix overview:', error);
    return res.status(500).json({ success: false, message: 'Failed to generate matrix overview' });
  }
}
