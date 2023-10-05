import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateContactListDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ required: true })
    contactId: number;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ required: true })
    contactGroupId: number;
}
