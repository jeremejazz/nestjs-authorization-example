import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { EntityRepository } from '@mikro-orm/sqlite';
import { CreateUser } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: EntityRepository<User>,
  ) {}

  async create(userDetails: CreateUser): Promise<User> {
    const { username, password, fullName } = userDetails;
    const user: User = this.usersRepository.create({
      username,
      password,
      fullName,
    });

    await this.usersRepository.insert(user);

    return user;
  }
  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  async findByUsername(username: string): Promise<User | null> {
    return await this.usersRepository.findOne({ username });
  }
}
