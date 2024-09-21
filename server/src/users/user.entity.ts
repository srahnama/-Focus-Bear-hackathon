import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { FriendRequest } from './friend-request.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

    // Friend Requests sent by this user
    @OneToMany(() => FriendRequest, (friendRequest) => friendRequest.sender)
    sentRequests: FriendRequest[];
  
    // Friend Requests received by this user
    @OneToMany(() => FriendRequest, (friendRequest) => friendRequest.receiver)
    receivedRequests: FriendRequest[];
}