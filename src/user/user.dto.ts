import { IsNotEmpty, IsString, IsNumber, IsEmail, IsOptional } from 'class-validator';

export class getAll {
  @IsNotEmpty()
  limit;

  @IsNotEmpty()
  page;

  @IsNotEmpty()
  @IsString()
  sortBy;

  @IsNotEmpty()
  @IsString()
  sortOrder;
}

export class updateUser {
  @IsOptional()
  @IsString()
  firstName;

  @IsOptional()
  @IsString()
  lastName;

  @IsOptional()
  @IsEmail()
  email;

  @IsOptional()
  @IsString()
  password;
}