import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';  // Assuming there's a User entity

@Entity()
export class FriendRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.sentRequests, { eager: true })
  sender: User;  // The user who sent the request

  @ManyToOne(() => User, (user) => user.receivedRequests, { eager: true })
  receiver: User;  // The user who received the request

  @Column({ type: 'boolean', default: false })
  isAccepted: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}