import { ApiProperty } from '@nestjs/swagger';

import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty({ required: true })
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty({ required: true })
    name: string;
  
    @IsString()
    // @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({ required: false })
    password: string;
  
}
