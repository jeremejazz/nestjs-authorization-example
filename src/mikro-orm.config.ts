import { defineConfig } from '@mikro-orm/sqlite';

export default defineConfig({
  entities: ['./dist/**/*.entity.js'],
  dbName: 'my-db-name',
  migrations: {
    path: './dist/migrations',
    pathTs: './src/migrations',
  },
});
