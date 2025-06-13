import { Migration } from '@mikro-orm/migrations';

export class Migration20250613125146_update_users extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`user\` drop column \`salt\`;`);

    this.addSql(`alter table \`user\` add column \`created_at\` datetime not null;`);
    this.addSql(`alter table \`user\` add column \`updated_at\` datetime not null;`);
  }

}
