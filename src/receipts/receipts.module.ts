import { Module } from '@nestjs/common';
import { ReceiptsController } from './receipts.controller';
import { ReceiptsService } from './receipts.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ReceiptsController],
  providers: [ReceiptsService, PrismaService]
})
export class ReceiptsModule {}
