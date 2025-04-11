import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/signin.dto';
import { User } from 'src/users/entities/user.entity';

import { CreateUserDto } from '../users/dto/create-user.dto';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @Public()
  async signUp(@Body() signupDto: CreateUserDto): Promise<User | null> {
    const user = await this.authService.signUp(signupDto);

    return user;
  }

  @Post('signin')
  @Public()
  async signIn(@Body() signInDTO: SignInDTO) {
    return await this.authService.signIn(signInDTO);
  }
}
