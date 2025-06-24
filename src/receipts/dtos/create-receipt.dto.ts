import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateReceiptDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  @IsOptional()
  date?: Date;

  @IsString()
  service_type:  string;

  @IsString()
  payment_type:  string;

  @IsUUID()
  @IsNotEmpty()
  customer_id: string;
}