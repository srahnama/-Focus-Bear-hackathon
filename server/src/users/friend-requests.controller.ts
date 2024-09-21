import { Controller, Post, Param, Delete, Body } from '@nestjs/common';
import { FriendRequestsService } from './friend-requests.service';

@Controller('friend-requests')
export class FriendRequestsController {
  constructor(private readonly friendRequestsService: FriendRequestsService) {}

  // Route to send a friend request
  @Post('send')
  async sendFriendRequest(
    @Body('senderId') senderId: number,
    @Body('receiverId') receiverId: number,
  ) {
    return this.friendRequestsService.sendFriendRequest(senderId, receiverId);
  }

  // Route to accept a friend request
  @Post('accept/:id')
  async acceptFriendRequest(@Param('id') id: number) {
    return this.friendRequestsService.acceptFriendRequest(id);
  }

  // Route to reject (or delete) a friend request
  @Delete('reject/:id')
  async rejectFriendRequest(@Param('id') id: number) {
    return this.friendRequestsService.rejectFriendRequest(id);
  }
}