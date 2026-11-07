import type { Request, Response } from 'express';
import { handleMentorChat } from '../services/mentorService.js';
import { z } from 'zod';

const chatSchema = z.object({
  message: z.string().min(1).max(2000),
  saveCode: z.string().optional(),
  studentId: z.number().int().optional(),
});

export async function askMentor(req: Request, res: Response) {
  try {
    const parse = chatSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ success: false, errors: parse.error.issues });
    }

    const { message, saveCode, studentId } = parse.data;
    const reply = await handleMentorChat({ message, saveCode, studentId });

    return res.json({ success: true, reply });
  } catch (error: any) {
    console.error('Mentor chat error:', error);
    return res.status(500).json({ success: false, message: 'Failed to generate mentor response' });
  }
}
