export type Language = 'bn' | 'en';

export interface SalaryRange {
  min: number;
  max: number;
  currency: string;
  formatted: string;
}

export interface LocalMarketData {
  region: string;
  entrySalary: SalaryRange;
  midSalary: SalaryRange;
  seniorSalary: SalaryRange;
  hiringSectors: string[];
  cvExpectations: string[];
  localDemandSummary_en: string;
  localDemandSummary_bn: string;
}

export interface InternationalMarketData {
  region: string;
  countryName_en: string;
  countryName_bn: string;
  demandLevel: 'High' | 'Moderate' | 'Selective';
  demandLevel_bn: string;
  visaReality_en: string;
  visaReality_bn: string;
  averageSalaryUsdOrLocal: string;
  requiredExperienceYears: string;
}

export interface RemoteMarketData {
  entryBarrier: 'Low' | 'Moderate' | 'High';
  entryBarrier_bn: string;
  monthlyRangeUsd: string;
  competitionLevel: string;
  competitionLevel_bn: string;
  englishRequirement: string;
  englishRequirement_bn: string;
  realities_en: string[];
  realities_bn: string[];
}

export interface MarketData {
  bangladesh: LocalMarketData;
  targetCountries: InternationalMarketData[];
  remote: RemoteMarketData;
}

export interface RoadmapModule {
  id: string;
  title_en: string;
  title_bn: string;
  description_en: string;
  description_bn: string;
  estimatedDays: number;
  mobileAccessible: boolean;
  keyTopics: string[];
  practicalTask_en: string;
  practicalTask_bn: string;
}

export interface RoadmapPhase {
  phaseNumber: number;
  phaseTitle_en: string;
  phaseTitle_bn: string;
  phaseSubtitle_en: string;
  phaseSubtitle_bn: string;
  durationWeeks: number;
  modules: RoadmapModule[];
}

export interface InterviewQuestion {
  id: string;
  question_en: string;
  question_bn: string;
  category: string;
  whyAsked_en: string;
  whyAsked_bn: string;
  howToAnswer_en: string;
  howToAnswer_bn: string;
  commonMistakes_en: string;
  commonMistakes_bn: string;
}

export interface FreeCertification {
  id: string;
  title_en: string;
  title_bn: string;
  provider: string;
  url: string;
  mobileAccessible: boolean;
  language: 'bn' | 'en' | 'both';
  durationHours: number;
  cost: string;
  isBdLocal?: boolean;
  category?: 'international_free' | 'bd_national' | 'exam_credential';
  relevance_en: string;
  relevance_bn: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  importance: 'Essential' | 'Recommended' | 'Bonus';
  description_en: string;
  description_bn: string;
}

export interface CareerTrack {
  id: number;
  slug: string;
  title_en: string;
  title_bn: string;
  summary_en: string;
  summary_bn: string;
  pivotAdvice_en: string;
  pivotAdvice_bn: string;
  minPcRequired: 'none' | 'low' | 'standard' | 'high';
  dayToDay_en: string[];
  dayToDay_bn: string[];
  mustHaveSkills: SkillItem[];
  marketData: MarketData;
  roadmapPhases: RoadmapPhase[];
  interviewQuestions: InterviewQuestion[];
  freeCerts: FreeCertification[];
}

export interface SurveyOption {
  key: string;
  label_en: string;
  label_bn: string;
  description_en: string;
  description_bn: string;
  mentorNote_en?: string;
  mentorNote_bn?: string;
  iconName?: string;
}

export interface SurveyQuestion {
  id: string;
  dimension: string;
  title_en: string;
  title_bn: string;
  subtitle_en: string;
  subtitle_bn: string;
  dependsOn?: {
    questionId: string;
    values: string[];
  };
  options: SurveyOption[];
  allowSkip?: boolean;
}

export interface SurveySubmission {
  hardware?: string;
  literacy?: string;
  english?: string;
  urgency?: string;
  interest?: string;
  studentName?: string;
  phoneOrRoll?: string;
  [key: string]: any;
}

export interface SuggestedTrackItem {
  track: CareerTrack;
  matchScore: number;
  matchReason_en: string;
  matchReason_bn: string;
  fitTag_en: string;
  fitTag_bn: string;
  hardwareTip_en: string;
  hardwareTip_bn: string;
  targetRole_en: string;
  targetRole_bn: string;
  targetStack: string[];
}

export interface DiagnosticResult {
  primaryTrack: CareerTrack;
  secondaryTrack: CareerTrack;
  matchScore: number;
  isSkipped?: boolean;
  requiresFoundationTrack: boolean;
  suggestedTracks?: SuggestedTrackItem[];
  allTracks?: CareerTrack[];
  personalizedRole_en?: string;
  personalizedRole_bn?: string;
  targetStack?: string[];
  hardwareSetupGuide_en?: string;
  hardwareSetupGuide_bn?: string;
  verdict: {
    heading_en: string;
    heading_bn: string;
    body_en: string;
    body_bn: string;
    hardwareVerdict_en: string;
    hardwareVerdict_bn: string;
    englishVerdict_en: string;
    englishVerdict_bn: string;
    urgencyVerdict_en: string;
    urgencyVerdict_bn: string;
    expenseVerdict_en?: string;
    expenseVerdict_bn?: string;
    actionPlanPoints_en: string[];
    actionPlanPoints_bn: string[];
  };
  saveCode: string;
  studentId: number;
}

export interface LanguageItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  difficulty_bn: string;
  description_en: string;
  description_bn: string;
  associatedRoadmaps: Array<{
    trackSlug: string;
    trackTitle_en: string;
    trackTitle_bn: string;
    roleInRoadmap_en: string;
    roleInRoadmap_bn: string;
    importance: 'Essential' | 'Recommended';
  }>;
  nextLanguageSuggestions?: Array<{
    nextLanguageId: string;
    nextLanguageName: string;
    targetRoadmapSlug: string;
    reason_en: string;
    reason_bn: string;
  }>;
}

export interface SkillMatrixItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  difficulty_bn: string;
  description_en: string;
  description_bn: string;
  associatedRoadmaps: Array<{
    trackSlug: string;
    trackTitle_en: string;
    trackTitle_bn: string;
    importance: 'Essential' | 'Recommended' | 'Bonus';
  }>;
}

export interface InterestMatrixItem {
  id: string;
  title_en: string;
  title_bn: string;
  tagline_en: string;
  tagline_bn: string;
  iconName: string;
  recommendedStarterLanguage: string;
  matchingRoadmaps: Array<{
    trackSlug: string;
    trackTitle_en: string;
    trackTitle_bn: string;
    fitReason_en: string;
    fitReason_bn: string;
    difficultyTier: 'Easy' | 'Moderate' | 'Challenging';
    difficultyTier_bn: string;
  }>;
}

