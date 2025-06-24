import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { ReceiptsModule } from './receipts/receipts.module';

@Module({
  imports: [AuthModule, UsersModule, CustomersModule, ReceiptsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
