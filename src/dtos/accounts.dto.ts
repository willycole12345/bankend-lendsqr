import { IsString, IsNumber, IsEmail } from 'class-validator';

export class CreateAccountDto {
  @IsEmail()
  public email: string;

  @IsString()
  public firstname: string;

  @IsString()
  public lastname: string;

  @IsNumber()
  public accountnumber: number;

  @IsNumber()
  public balance: number;

  @IsString()
  public occupation: string;

  @IsString()
  public accounttype: string;

  @IsString()
  public address: string;

  @IsString()
  public nationality: string;

  //   @IsString()
  //   public created_dt: string;
}
