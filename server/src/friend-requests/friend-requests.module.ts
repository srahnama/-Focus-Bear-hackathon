import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendRequestsService } from './friend-requests.service';
import { FriendRequestsController } from './friend-requests.controller';
import { FriendRequest } from './friend-request.entity'; // The FriendRequest entity
import { User } from '../users/user.entity'; // Assuming the User entity is in the users module

@Module({
  imports: [
    TypeOrmModule.forFeature([FriendRequest, User]), // Register the repositories for both entities
  ],
  providers: [FriendRequestsService],
  controllers: [FriendRequestsController],
})
export class FriendRequestsModule {}