import type { Request, Response } from 'express';
import { uploadObjectToNeon, getObjectFromNeon, listObjectsFromNeon, getPresignedDownloadUrl } from '../services/storageService.js';
import { z } from 'zod';

const uploadSchema = z.object({
  key: z.string().min(1).max(256),
  content: z.string().min(1),
  contentType: z.string().optional().default('text/plain'),
});

export async function handleUpload(req: Request, res: Response) {
  try {
    const parse = uploadSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ success: false, errors: parse.error.issues });
    }

    const { key, content, contentType } = parse.data;
    await uploadObjectToNeon(key, content, contentType);

    const presignedUrl = await getPresignedDownloadUrl(key, 3600);

    return res.json({
      success: true,
      message: 'Uploaded to Neon Object Storage successfully',
      key,
      presignedUrl,
    });
  } catch (err: any) {
    console.error('Storage upload error:', err);
    return res.status(500).json({ success: false, message: 'Failed to upload object to Neon storage', error: err.message });
  }
}

export async function handleList(req: Request, res: Response) {
  try {
    const prefix = typeof req.query.prefix === 'string' ? req.query.prefix : undefined;
    const items = await listObjectsFromNeon(prefix);
    return res.json({ success: true, items });
  } catch (err: any) {
    console.error('Storage list error:', err);
    return res.status(500).json({ success: false, message: 'Failed to list objects from Neon storage', error: err.message });
  }
}

export async function handleGet(req: Request, res: Response) {
  try {
    const rawKey = req.params.key;
    if (!rawKey) {
      return res.status(400).json({ success: false, message: 'Key parameter required' });
    }
    const key = String(rawKey);

    const file = await getObjectFromNeon(key);
    return res.json({ success: true, key, file });
  } catch (err: any) {
    console.error('Storage get error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch object from Neon storage', error: err.message });
  }
}
