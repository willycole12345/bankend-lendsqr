
import { IsNumber, IsString ,IsNumberString } from 'class-validator';

export class CreateTransferDto {
  
  @IsString()
  public sendername: string;

  @IsString()
  public senderaccountnumber: string;

  @IsNumberString()
  public receivername: number;

  @IsNumber()
  public receiveraccountnumber: number;

  @IsNumberString()
  public amount: number;

  @IsString()
  public naration: string;


}
