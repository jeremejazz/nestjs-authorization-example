import { Collection, Entity, ManyToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Role } from '../../roles/entities/role.entity';

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

  @ManyToMany({ entity: () => Role, mappedBy: 'users'})
  roles = new Collection<Role>(this);

  constructor(data?: Partial<User>) {
    Object.assign(this, data);
  }
}
