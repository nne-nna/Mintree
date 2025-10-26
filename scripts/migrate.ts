import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import { join } from 'path';

config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const migrationsFolder = join(process.cwd(), 'db/drizzle');

console.log('Using migrations folder:', migrationsFolder);

const main = async () => {
  try {
    await migrate(db, { migrationsFolder });
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error);
    process.exit(1);
  }
};

main();
