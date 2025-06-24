import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateReceiptDto } from './dtos/create-receipt.dto';
import { UpdateReceiptDto } from './dtos/update-receipt.dto';

@Injectable()
export class ReceiptsService {
  constructor(private prisma: PrismaService) {}

  async create(createReceiptDto: CreateReceiptDto, userId: string) {
    const { customer_id, ...rest } = createReceiptDto;
    const customer = await this.prisma.customer.findUnique({
      where: { id: customer_id },
    });
    if (!customer) {
      throw new NotFoundException(
        `Cliente com ID "${customer_id}" não encontrado.`,
      );
    }

    return this.prisma.receipt.create({
      data: {
        ...rest,
        user_id: userId,
        customer_id: customer_id,
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.receipt.findMany({
      where: { user_id: userId },
      include: {
        customer: true,
      },
    });
  }

  async findOne(id: string, userId: string) {
    const receipt = await this.prisma.receipt.findUnique({
      where: { id },
      include: { customer: true },
    });

    if (!receipt) {
      throw new NotFoundException(`Recibo com ID "${id}" não encontrado.`);
    }

    if (receipt.user_id !== userId) {
      throw new ForbiddenException(
        'Você não tem permissão para acessar este recurso.',
      );
    }

    return receipt;
  }

  async update(id: string, updateReceiptDto: UpdateReceiptDto, userId: string) {
    await this.findOne(id, userId);

    return this.prisma.receipt.update({
      where: { id },
      data: updateReceiptDto,
    });
  }

  async remove(id: string, userId: string) {
    await this.findOne(id, userId);

    return this.prisma.receipt.delete({
      where: { id },
    });
  }
}