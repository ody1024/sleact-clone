import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelMembers } from 'src/entities/ChannelMembers';
import { WorkspaceMembers } from 'src/entities/WorkspaceMembers';
import { Users } from 'src/entities/Users';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, ChannelMembers, WorkspaceMembers]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
