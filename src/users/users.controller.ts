import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { JWTPayload } from '../auth/interfaces/jwt-payload.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  async profile(@Req() req): Promise<User>{

    const { userId } = req.user as JWTPayload;
    return this.usersService.findOne(userId);

  }
}
