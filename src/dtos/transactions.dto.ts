import { IsString, IsNumberString} from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  public sendername: string;

  @IsString()
  public receivername: string;

  @IsNumberString()
  public accountnumber: number;

  @IsNumberString()
  public amount: number;

  @IsString()
  public naration: string;
}
