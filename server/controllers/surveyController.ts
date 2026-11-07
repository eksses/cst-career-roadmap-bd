import type { Request, Response } from 'express';
import { adaptiveQuestions } from '../data/adaptiveQuestions.js';
import { processDiagnosticSurvey, createDirectSelectionProfile } from '../services/diagnosticService.js';

export async function getSurveyQuestions(req: Request, res: Response) {
  try {
    return res.json({ success: true, questions: adaptiveQuestions });
  } catch (error: any) {
    console.error('Error fetching adaptive survey questions:', error);
    return res.status(500).json({ success: false, message: 'Failed to load survey questions' });
  }
}

export async function submitSurvey(req: Request, res: Response) {
  try {
    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid submission format'
      });
    }

    const result = await processDiagnosticSurvey(req.body);
    return res.json({ success: true, data: result });
  } catch (error: any) {
    console.error('Error processing survey submission:', error);
    return res.status(500).json({ success: false, message: 'Internal server error processing survey' });
  }
}

export async function selectDirectRoadmap(req: Request, res: Response) {
  try {
    const { trackSlug, languagePref } = req.body;
    if (!trackSlug) {
      return res.status(400).json({ success: false, message: 'trackSlug is required' });
    }
    const result = await createDirectSelectionProfile({ trackSlug, languagePref });
    return res.json({ success: true, data: result });
  } catch (error: any) {
    console.error('Error in direct roadmap selection:', error);
    return res.status(500).json({ success: false, message: 'Failed to select roadmap directly' });
  }
}
