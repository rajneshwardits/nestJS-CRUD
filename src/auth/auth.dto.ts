import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class signUpDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  firstName;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  lastName;

  @IsEmail()
  @IsNotEmpty()
  email;

  @IsString()
  @IsNotEmpty()
  password;
}

export class signInDTO {
  @IsEmail()
  @IsNotEmpty()
  email;

  @IsString()
  @IsNotEmpty()
  password;
}
