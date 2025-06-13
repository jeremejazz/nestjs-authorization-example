import { Migration } from '@mikro-orm/migrations';

export class Migration20250613125946_roles extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`role\` (\`id\` integer not null primary key autoincrement, \`name\` text not null, \`description\` text null);`);
    this.addSql(`create unique index \`role_name_unique\` on \`role\` (\`name\`);`);

    this.addSql(`create table \`user_roles\` (\`user_id\` integer not null, \`role_id\` integer not null, constraint \`user_roles_user_id_foreign\` foreign key(\`user_id\`) references \`user\`(\`id\`) on delete cascade on update cascade, constraint \`user_roles_role_id_foreign\` foreign key(\`role_id\`) references \`role\`(\`id\`) on delete cascade on update cascade, primary key (\`user_id\`, \`role_id\`));`);
    this.addSql(`create index \`user_roles_user_id_index\` on \`user_roles\` (\`user_id\`);`);
    this.addSql(`create index \`user_roles_role_id_index\` on \`user_roles\` (\`role_id\`);`);
  }

}
