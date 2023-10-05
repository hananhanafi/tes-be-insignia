import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ContactGroupsService } from './contact-groups.service';
import { CreateContactGroupDto } from './dto/create-contact-group.dto';
import { UpdateContactGroupDto } from './dto/update-contact-group.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ContactGroupEntity } from './entities/contact-group.entity';

@Controller('contact-groups')
@ApiTags('Contact Groups')
export class ContactGroupsController {
  constructor(private readonly contactGroupsService: ContactGroupsService) {}

  @Post()
  @ApiCreatedResponse({ type: ContactGroupEntity })
  create(@Body() createContactGroupDto: CreateContactGroupDto) {
    return this.contactGroupsService.create(createContactGroupDto);
  }

  @Get()
  @ApiOkResponse({ type: ContactGroupEntity, isArray: true })
  findAll() {
    return this.contactGroupsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ContactGroupEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const contactGroup = await this.contactGroupsService.findOne(id);
    if (!contactGroup) {
      throw new NotFoundException(`Contact Group with ${id} does not exist.`);
    }
    return contactGroup;
  }

  @Put(':id')
  @ApiOkResponse({ type: ContactGroupEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateContactGroupDto: UpdateContactGroupDto) {
    return this.contactGroupsService.update(id, updateContactGroupDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.contactGroupsService.remove(id);
  }
}
