import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { CreateReceiptDto } from './dtos/create-receipt.dto';
import { UpdateReceiptDto } from './dtos/update-receipt.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from 'generated/prisma';

@UseGuards(AuthGuard('jwt')) 
@Controller('receipts')
export class ReceiptsController {
  constructor(private readonly receiptsService: ReceiptsService) {}

  @Post()
  create(@Body() createReceiptDto: CreateReceiptDto, @Req() req: Request) {
    const user = req.user as User;
    return this.receiptsService.create(createReceiptDto, user.id);
  }

  @Get()
  findAll(@Req() req: Request) {
    const user = req.user as User;
    return this.receiptsService.findAll(user.id);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string, @Req() req: Request) {
    const user = req.user as User;
    return this.receiptsService.findOne(id, user.id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateReceiptDto: UpdateReceiptDto,
    @Req() req: Request,
  ) {
    const user = req.user as User;
    return this.receiptsService.update(id, updateReceiptDto, user.id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string, @Req() req: Request) {
    const user = req.user as User;
    return this.receiptsService.remove(id, user.id);
  }
}