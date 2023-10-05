import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ContactListService } from './contact-list.service';
import { CreateContactListDto } from './dto/create-contact-list.dto';
import { UpdateContactListDto } from './dto/update-contact-list.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ContactListEntity } from './entities/contact-list.entity';

@Controller('contact-list')
@ApiTags('Contact List')
export class ContactListController {
  constructor(private readonly contactListService: ContactListService) {}

  @Post()
  @ApiCreatedResponse({ type: ContactListEntity })
  create(@Body() createContactListDto: CreateContactListDto) {
    return this.contactListService.create(createContactListDto);
  }

  @Get()
  @ApiOkResponse({ type: ContactListEntity, isArray: true })
  findAll() {
    return this.contactListService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ContactListEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const contactList = await this.contactListService.findOne(id);
    if (!contactList) {
      throw new NotFoundException(`Contact List with ${id} does not exist.`);
    }
    return contactList;
  }

  @Put(':id')
  @ApiOkResponse({ type: ContactListEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateContactListDto: UpdateContactListDto) {
    return this.contactListService.update(id, updateContactListDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.contactListService.remove(id);
  }
}
