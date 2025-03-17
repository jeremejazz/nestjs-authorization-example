import { defineConfig } from '@mikro-orm/sqlite';

export default defineConfig({
  entities: ['./dist/**/*.entity.js'],
  dbName: 'auth.sqlite',

  migrations: {
    path: './dist/migrations',
    pathTs: './src/migrations',
  },
});
