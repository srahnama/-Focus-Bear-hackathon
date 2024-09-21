import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',         // Database type
      host: 'localhost',        // Database host (or use your host)
      port: 5432,               // Database port
      username: 'postgres',     // Database username
      password: 'password',     // Database password
      database: 'mydatabase',   // Name of the database
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entities path
      synchronize: true,        // Automatically sync the database schema (disable in production)
    }),
    UsersModule, // Example module (users feature module)
  ],
})
export class AppModule {}
