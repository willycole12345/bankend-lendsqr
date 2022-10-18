import { IsString, IsNumberString, IsEmail } from 'class-validator';

export class CreateAccountDto {
  @IsEmail()
  public email: string;

  @IsString()
  public firstname: string;

  @IsString()
  public lastname: string;

  @IsNumberString()
  public accountnumber: number;

  @IsNumberString()
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
