import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Role {
  @PrimaryKey({ type: 'int', autoincrement: true })
  id: number;

  @Property({ unique: true, type: 'string' })
  name: string;

  @Property({ type: 'string', nullable: true })
  description: string;

  @ManyToMany({ entity: () => User, mappedBy: 'roles'})
  users = new Collection<User>(this);
}
