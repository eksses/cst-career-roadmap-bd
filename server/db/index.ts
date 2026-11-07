import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import dns from 'dns';
import * as schema from './schema.js';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL || 'postgresql://cst_user:cst_pass@localhost:5432/cst_roadmap';

let pool: pg.Pool;

if (connectionString.includes('neon.tech')) {
  const parsed = new URL(connectionString);
  const hostname = parsed.hostname.replace('-pooler', '');

  pool = new pg.Pool({
    host: '3.147.219.177',
    port: Number(parsed.port) || 5432,
    user: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    database: parsed.pathname.replace(/^\//, ''),
    ssl: {
      rejectUnauthorized: false,
      servername: hostname,
    },
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  });
} else {
  pool = new pg.Pool({ connectionString });
}

export const db = drizzle(pool, { schema });
export { pool, schema };
