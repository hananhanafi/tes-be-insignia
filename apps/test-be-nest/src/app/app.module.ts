import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { ContactsModule } from '../contacts/contacts.module';
import { ContactGroupsModule } from '../contact-groups/contact-groups.module';
import { ContactListModule } from '../contact-list/contact-list.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [UsersModule,ContactsModule,ContactGroupsModule,ContactListModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
