import { Router } from 'express';
import { getSurveyQuestions, submitSurvey, selectDirectRoadmap } from '../controllers/surveyController.js';
import { getAllTracks, getTrackBySlug } from '../controllers/trackController.js';
import { getLanguagesMatrix, getSkillsMatrix, getInterestsMatrix, getMatrixOverview } from '../controllers/matrixController.js';
import { getProfileBySaveCode, updateProgress, switchTrack } from '../controllers/profileController.js';
import { askMentor } from '../controllers/mentorController.js';
import { handleUpload, handleList, handleGet } from '../controllers/storageController.js';

export const apiRouter = Router();

// Survey & Diagnostic
apiRouter.get('/survey', getSurveyQuestions);
apiRouter.post('/survey/submit', submitSurvey);
apiRouter.post('/survey/direct-select', selectDirectRoadmap);

// Career Tracks
apiRouter.get('/tracks', getAllTracks);
apiRouter.get('/tracks/:slug', getTrackBySlug);

// Bi-Directional Tech Matrix (Roadmap by Language, Roadmap by Skill, Skills by Roadmap, Interests by Roadmap)
apiRouter.get('/matrix/languages', getLanguagesMatrix);
apiRouter.get('/matrix/skills', getSkillsMatrix);
apiRouter.get('/matrix/interests', getInterestsMatrix);
apiRouter.get('/matrix/overview', getMatrixOverview);

// Student Profile & Progress Session
apiRouter.get('/profile/:saveCode', getProfileBySaveCode);
apiRouter.post('/progress', updateProgress);
apiRouter.post('/track/switch', switchTrack);

// Context-Aware AI Career Mentor Agent
apiRouter.post('/mentor', askMentor);
apiRouter.post('/agent', askMentor);

// Neon Object Storage Endpoints
apiRouter.post('/storage/upload', handleUpload);
apiRouter.get('/storage/list', handleList);
apiRouter.get('/storage/file/:key', handleGet);
