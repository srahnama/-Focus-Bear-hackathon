import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'postgres', // Database type
      host: process.env.DB_HOST,               // Database host
      port: parseInt(process.env.DB_PORT, 10), // Database port
      username: process.env.DB_USERNAME,       // Database username
      password: process.env.DB_PASSWORD,       // Database password
      database: process.env.DB_DATABASE,       // Name of the database
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entities path
      synchronize: true,                       // Automatically sync the database schema (disable in production)
    }),
    UsersModule,
    // UsersModule, // Example module (users feature module)
  ],
})
export class AppModule {}