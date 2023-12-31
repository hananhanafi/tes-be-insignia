import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './entities/user.entity';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  
  constructor(private prisma: PrismaService) {}
  
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );
    createUserDto.password = hashedPassword;
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany({ where: {} });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
  
  async updateLastActivity(id: number) {
    const user = await this.findOne(id);
    user.lastActivityAt = new Date();

    return this.prisma.user.update({
      where: { id },
      data: user,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async changePassword(user: UserEntity, changePasswordDto: ChangePasswordDto) {
    const isPasswordMatch = await bcrypt.compare(changePasswordDto.oldPassword, user.password).then(function(result) {
      return result
    });
    if(isPasswordMatch) {
      user.password = await bcrypt.hash(
        changePasswordDto.newPassword,
        roundsOfHashing,
      );
    }else{
      throw new BadRequestException(`Old password does not match`);
    }

    return this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
  }
  remove(id: number) {
    // return `This action removes a #${id} user`;
    return this.prisma.user.delete({ where: { id } });
  }
}
