import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';
export class CreateContactGroupDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true })
    name: string;

    @IsString()
    @ApiProperty({ required: false })
    description: string;
}
