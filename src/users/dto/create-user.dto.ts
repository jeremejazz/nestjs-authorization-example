import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUser {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;
}
