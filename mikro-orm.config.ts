import { defineConfig } from '@mikro-orm/sqlite';
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  entities: ['./dist/**/*.entity.js'],
  dbName: process.env.DATABASE_NAME,

  migrations: {
    path: './dist/migrations',
    pathTs: './src/migrations',
  },
});
