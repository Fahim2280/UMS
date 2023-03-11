import { IsAlpha, IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class UserDto {
  Uid: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(3, 8, { message: 'Password must be between 3 and 8 characters' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*?&#]{6,}$/)
  password: string;
}
