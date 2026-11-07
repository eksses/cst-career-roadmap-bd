import { S3Client, PutObjectCommand, GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import dotenv from 'dotenv';

dotenv.config();

const BUCKET_NAME = process.env.AWS_BUCKET_NAME || 'uplaods';

export const s3Client = new S3Client({
  endpoint: process.env.AWS_ENDPOINT_URL_S3 || 'https://br-silent-credit-bewmwln0.storage.c-9.us-east-2.aws.neon.tech',
  region: process.env.AWS_REGION || 'us-east-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'nak_live_e02ff71c7fff489bb78e87b6debde1f6',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'nsk_live_122e102d32be256bbc0346b9f1b59949398baf8d3f5767eee593394625059442',
  },
  forcePathStyle: true, // required: Neon uses path-style addressing
});

export async function uploadObjectToNeon(key: string, body: Buffer | string, contentType: string = 'text/plain') {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: body,
    ContentType: contentType,
  });
  return await s3Client.send(command);
}

export async function getObjectFromNeon(key: string) {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });
  const res = await s3Client.send(command);
  const content = await res.Body?.transformToString();
  return {
    content,
    contentType: res.ContentType,
    lastModified: res.LastModified,
  };
}

export async function listObjectsFromNeon(prefix?: string) {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    Prefix: prefix,
  });
  const res = await s3Client.send(command);
  return res.Contents || [];
}

export async function getPresignedDownloadUrl(key: string, expiresIn: number = 3600) {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });
  return await getSignedUrl(s3Client, command, { expiresIn });
}
