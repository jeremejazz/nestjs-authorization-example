import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [MikroOrmModule.forFeature([User])],
  exports: [UsersService],
})
export class UsersModule {}
