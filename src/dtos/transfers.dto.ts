import { IsNumber, IsString, IsNumberString } from 'class-validator';

export class CreateTransferDto {
  @IsString()
  public sendername: string;

  @IsString()
  public senderaccountnumber: number;

  @IsString()
  public receivername: string;

  @IsNumber()
  public receiveraccountnumber: number;

  @IsNumberString()
  public amount: number;

  @IsString()
  public naration: string;
}
