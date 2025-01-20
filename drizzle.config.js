import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://SoluInterior_owner:Erz2X6GLKbpk@ep-quiet-breeze-a43ofe17.us-east-1.aws.neon.tech/SoluInterior?sslmode=require',
  },
});
