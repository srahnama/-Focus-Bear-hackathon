import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FriendRequest } from './friend-request.entity';
import { User } from '../users/user.entity';

@Injectable()
export class FriendRequestsService {
  constructor(
    @InjectRepository(FriendRequest)
    private friendRequestRepository: Repository<FriendRequest>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Send a friend request
  async sendFriendRequest(senderId: number, receiverId: number): Promise<FriendRequest> {
    const sender = await this.userRepository.findOne({ where: { id: senderId } });
    const receiver = await this.userRepository.findOne({ where: { id: receiverId } });

    if (!sender || !receiver) {
      throw new NotFoundException('User not found');
    }

    const friendRequest = this.friendRequestRepository.create({
      sender,
      receiver,
    });

    return this.friendRequestRepository.save(friendRequest);
  }

  // Accept a friend request
  async acceptFriendRequest(requestId: number): Promise<FriendRequest> {
    const friendRequest = await this.friendRequestRepository.findOne({ where: { id: requestId } });
    
    if (!friendRequest) {
      throw new NotFoundException('Friend request not found');
    }

    friendRequest.isAccepted = true;
    return this.friendRequestRepository.save(friendRequest);
  }

  // Reject a friend request (or delete it)
  async rejectFriendRequest(requestId: number): Promise<void> {
    const friendRequest = await this.friendRequestRepository.findOne({ where: { id: requestId } });

    if (!friendRequest) {
      throw new NotFoundException('Friend request not found');
    }

    await this.friendRequestRepository.remove(friendRequest);
  }

  // Method to get all friend requests received by a user
  async getReceivedFriendRequests(userId: number): Promise<FriendRequest[]> {
    const receiver = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!receiver) {
      throw new Error('User not found');
    }

    // Find all friend requests where the user is the receiver
    return this.friendRequestRepository.find({
      where: { receiver: receiver },
      relations: ['sender'],  // Include the sender's details in the result
    });
  }

}