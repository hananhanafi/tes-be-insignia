import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateContactDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty({ required: true })
    name: string;
  
    @IsPhoneNumber()
    @IsNotEmpty()
    @MaxLength(20)
    @ApiProperty({ required: true })
    phoneNumber: string;
    
    @IsString()
    @ApiProperty({ required: false })
    email: string;

    @IsString()
    @ApiProperty({ required: false })
    address: string;
}
