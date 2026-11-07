import { pgTable, serial, text, varchar, integer, timestamp, jsonb } from 'drizzle-orm/pg-core';
import type { MarketData, RoadmapPhase, InterviewQuestion, FreeCertification, SkillItem } from '../../shared/types.js';

export const studentProfiles = pgTable('student_profiles', {
  id: serial('id').primaryKey(),
  saveCode: varchar('save_code', { length: 16 }).notNull().unique(),
  name: text('name').default('CST Student'),
  phoneOrRoll: text('phone_or_roll'),
  languagePref: varchar('language_pref', { length: 8 }).default('bn'),
  hardwareTier: text('hardware_tier'),
  pcLiteracy: text('pc_literacy'),
  englishLevel: text('english_level'),
  urgencyLevel: text('urgency_level'),
  interestArea: text('interest_area'),
  primaryTrackId: integer('primary_track_id'),
  secondaryTrackId: integer('secondary_track_id'),
  verdictData: jsonb('verdict_data'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const surveyResponses = pgTable('survey_responses', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id').references(() => studentProfiles.id, { onDelete: 'cascade' }),
  questionKey: text('question_key').notNull(),
  selectedOption: text('selected_option').notNull(),
  recordedAt: timestamp('recorded_at').defaultNow(),
});

export const careerTracks = pgTable('career_tracks', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  titleEn: text('title_en').notNull(),
  titleBn: text('title_bn').notNull(),
  summaryEn: text('summary_en').notNull(),
  summaryBn: text('summary_bn').notNull(),
  pivotAdviceEn: text('pivot_advice_en').notNull(),
  pivotAdviceBn: text('pivot_advice_bn').notNull(),
  minPcRequired: text('min_pc_required').notNull().default('none'),
  dayToDayJson: jsonb('day_to_day_json').$type<{ en: string[]; bn: string[] }>().notNull(),
  mustHaveSkillsJson: jsonb('must_have_skills_json').$type<SkillItem[]>().notNull(),
  marketDataJson: jsonb('market_data_json').$type<MarketData>().notNull(),
  roadmapPhasesJson: jsonb('roadmap_phases_json').$type<RoadmapPhase[]>().notNull(),
  interviewQuestionsJson: jsonb('interview_questions_json').$type<InterviewQuestion[]>().notNull(),
  freeCertsJson: jsonb('free_certs_json').$type<FreeCertification[]>().notNull(),
});

export const studentProgress = pgTable('student_progress', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id').references(() => studentProfiles.id, { onDelete: 'cascade' }),
  trackId: integer('track_id').references(() => careerTracks.id),
  completedMilestoneIds: jsonb('completed_milestone_ids').$type<string[]>().default([]),
  completedCertIds: jsonb('completed_cert_ids').$type<string[]>().default([]),
  completedSkillIds: jsonb('completed_skill_ids').$type<string[]>().default([]),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const mentorChats = pgTable('mentor_chats', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id').references(() => studentProfiles.id, { onDelete: 'cascade' }),
  role: text('role').notNull(), // 'user' | 'assistant'
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export type StudentProfile = typeof studentProfiles.$inferSelect;
export type NewStudentProfile = typeof studentProfiles.$inferInsert;
export type CareerTrackEntity = typeof careerTracks.$inferSelect;
export type StudentProgressEntity = typeof studentProgress.$inferSelect;
export type MentorChatEntity = typeof mentorChats.$inferSelect;
