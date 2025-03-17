import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { EntityRepository } from '@mikro-orm/sqlite';
import { SignUpDto } from '../auth/dto/signup.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: EntityRepository<User>,
  ) {}

  async create(userDetails: SignUpDto): Promise<User> {
    const { username, password, fullName } = userDetails;
    const user: User = this.usersRepository.create({
      username,
      password,
      fullName,
    });

    await this.usersRepository.insert(user);

    return user;
  }

  async findByUsername(username: string): Promise<User | null> {
    return await this.usersRepository.findOne({ username });
  }
}
