import { Module } from '@nestjs/common';
import { ContactListService } from './contact-list.service';
import { ContactListController } from './contact-list.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ContactListController],
  providers: [ContactListService],
  imports: [PrismaModule],
})
export class ContactListModule {}
