import { Contact } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class ContactEntity implements Contact{
    @ApiProperty()
    id: number;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
    @ApiProperty()
    workspaceId: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    phoneNumber: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    address: string;
}
