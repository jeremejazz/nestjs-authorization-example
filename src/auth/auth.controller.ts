import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/signin.dto';
import { User } from 'src/users/entities/user.entity';
 
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signIn(
    @Body() signInDTO: SignInDTO,
  ) {
    return await this.authService.signIn(signInDTO);
  }

  @Post('signup')
  async signUp(
    @Body() signupDto: SignUpDto,
  ): Promise<User> {
    const user = await this.authService.signUp(signupDto);
    
    return user;
  }

  
}
