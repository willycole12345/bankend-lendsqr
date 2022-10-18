import { IsString, IsNumber } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  public sendername: string;

  @IsString()
  public receivername: string;

  @IsNumber()
  public accountnumber: number;

  @IsNumber()
  public amount: number;

  @IsString()
  public naration: string;
}
