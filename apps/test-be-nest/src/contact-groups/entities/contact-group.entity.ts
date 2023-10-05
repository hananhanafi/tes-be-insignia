import { ContactGroup } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class ContactGroupEntity implements ContactGroup {
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
    description: string;
}
