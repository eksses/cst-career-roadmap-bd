import { db, schema } from './index.js';
import { careerTracks } from './schema.js';
import { careerTracksData } from '../data/careerTracksData.js';
import { eq } from 'drizzle-orm';

async function seed() {
  console.log('Seeding career tracks into database...');
  try {
    for (const track of careerTracksData) {
      const existing = await db.select().from(careerTracks).where(eq(careerTracks.slug, track.slug)).limit(1);
      
      const payload = {
        slug: track.slug,
        titleEn: track.title_en,
        titleBn: track.title_bn,
        summaryEn: track.summary_en,
        summaryBn: track.summary_bn,
        pivotAdviceEn: track.pivotAdvice_en,
        pivotAdviceBn: track.pivotAdvice_bn,
        minPcRequired: track.minPcRequired,
        dayToDayJson: {
          en: track.dayToDay_en,
          bn: track.dayToDay_bn,
        },
        mustHaveSkillsJson: track.mustHaveSkills,
        marketDataJson: track.marketData,
        roadmapPhasesJson: track.roadmapPhases,
        interviewQuestionsJson: track.interviewQuestions,
        freeCertsJson: track.freeCerts,
      };

      if (existing.length > 0) {
        await db.update(careerTracks).set(payload).where(eq(careerTracks.slug, track.slug));
        console.log(`Updated track: ${track.slug}`);
      } else {
        await db.insert(careerTracks).values(payload);
        console.log(`Inserted track: ${track.slug}`);
      }
    }

    console.log('Database seeded successfully with all 10 CST career tracks.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
