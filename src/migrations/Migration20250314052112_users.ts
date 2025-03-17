import { Migration } from '@mikro-orm/migrations';

export class Migration20250314052112_users extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table \`user\` (\`id\` integer not null primary key autoincrement, \`username\` text not null, \`password\` text not null, \`full_name\` text null);`,
    );
    this.addSql(
      `create unique index \`user_username_unique\` on \`user\` (\`username\`);`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(`DROP TABLE \`user\`;`);
  }
}
