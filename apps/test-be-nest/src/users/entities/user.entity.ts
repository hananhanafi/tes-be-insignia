import { User, UserRoleEnum } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
export class UserEntity implements User {
    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
    
    @ApiProperty()
    id: number;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
    @ApiProperty()
    lastActivityAt: Date;
    @ApiProperty()
    email: string;
    @ApiProperty()
    emailVerified: Date;
    @ApiProperty()
    name: string;
    @Exclude()
    password: string;
    @ApiProperty()
    role: UserRoleEnum;
}
