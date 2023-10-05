import { Injectable } from '@nestjs/common';
import { CreateContactGroupDto } from './dto/create-contact-group.dto';
import { UpdateContactGroupDto } from './dto/update-contact-group.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContactGroupsService {

  constructor(private prisma: PrismaService) {}

  create(createContactGroupDto: CreateContactGroupDto) {
    return this.prisma.contactGroup.create({ data: createContactGroupDto });
  }

  findAll() {
    return this.prisma.contactGroup.findMany({ where: {} });
  }

  findOne(id: number) {
    return this.prisma.contactGroup.findUnique({ where: { id } });
  }

  update(id: number, updateContactGroupDto: UpdateContactGroupDto) {
    return this.prisma.contactGroup.update({
      where: { id },
      data: updateContactGroupDto,
    });
  }

  remove(id: number) {
    return this.prisma.contactGroup.delete({ where: { id } });
  }
}
