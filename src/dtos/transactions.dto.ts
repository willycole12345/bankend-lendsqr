
import { IsNumber, IsString ,IsNumberString } from 'class-validator';

export class CreateTransactionDto {
  
  @IsString()
  public sendername: string;

  @IsString()
  public recievername: string;

  @IsNumberString()
  public accountnumber: number;

  @IsNumberString()
public amount: number;

  @IsString()
  public naration: string;


}

