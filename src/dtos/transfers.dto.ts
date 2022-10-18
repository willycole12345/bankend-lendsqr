import { IsString,IsNumber } from 'class-validator';

export class CreateTransferDto {
  @IsString()
  public sendername: string;

  @IsNumber()
  public senderaccountnumber: number;

  @IsString()
  public receivername: string;

  @IsNumber()
  public receiveraccountnumber: number;

  @IsNumber()
  public amount: number;

  @IsString()
  public naration: string;
}
