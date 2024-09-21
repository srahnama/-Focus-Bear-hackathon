import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';  // Import the User entity

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register the entity with TypeOrmModule
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}