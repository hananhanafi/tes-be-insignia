import { ContactList } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ContactListEntity implements ContactList {
    @ApiProperty()
    id: number;

    @ApiProperty({ required: true, nullable: false })
    contactId: number | null;

    @ApiProperty({ required: true, nullable: false })
    contactGroupId: number | null;
}
