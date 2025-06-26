import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './users.controller';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
