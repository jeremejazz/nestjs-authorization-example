import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { User } from 'src/users/entities/user.entity';
import { SignInDTO } from './dto/signin.dto';

@Injectable()
export class AuthService {
  async signUp(signupDto: SignUpDto): Promise<User | void> {

    
  }

  async signIn(signInDTO: SignInDTO): Promise<User | void> { // to change

  }
}
