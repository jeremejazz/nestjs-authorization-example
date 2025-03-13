import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey({ type: 'int', autoincrement: true })
  id: number;

  @Property({ unique: true })
  username: string;

  @Property({ type: 'string', hidden: true })
  password: string;

  @Property({ type: 'string', nullable: true, hidden: true })
  salt: string;

  @Property({ type: 'string', name: 'full_name', nullable: true })
  fullName: string;

  constructor(data?: Partial<User>) {
    Object.assign(this, data);
  }
}
