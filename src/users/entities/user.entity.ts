import { BeforeCreate, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey({ type: 'int', autoincrement: true })
  id: number;

  @Property({ unique: true })
  username: string;

  @Property({ type: 'string', hidden: true })
  password: string;

  @Property({ type: 'string', name: 'full_name', nullable: true })
  fullName: string;

  @Property({ type: 'Date', onCreate: () => new Date(), name: 'created_at' })
  public createdAt: Date | null;

  @Property({
    type: 'Date',
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
    name: 'updated_at',
  })
  public updatedAt: Date | null;

  constructor(data?: Partial<User>) {
    Object.assign(this, data);
  }
}
