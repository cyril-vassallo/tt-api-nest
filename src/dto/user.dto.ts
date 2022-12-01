import { IsString, MaxLength, IsOptional, IsEmail } from 'class-validator';
import { RoleInterface } from '../Interfaces/interfaces';

export class UserDto {
  @IsString()
  id: string;

  @IsString()
  @MaxLength(70)
  firstName: string;

  @IsString()
  @MaxLength(70)
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(255)
  description: string;

  @IsString()
  @MaxLength(70)
  job: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  photo?: string;

  @IsOptional()
  role?: RoleInterface;
}
