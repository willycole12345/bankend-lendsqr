import { IsString, IsNumberString } from 'class-validator';

export class CreateTransferDto {
  @IsString()
  public sendername: string;

  @IsNumberString()
  public senderaccountnumber: number;

  @IsString()
  public receivername: string;

  @IsNumberString()
  public receiveraccountnumber: number;

  @IsNumberString()
  public amount: number;

  @IsString()
  public naration: string;
}
