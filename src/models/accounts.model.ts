import { Model, ModelObject } from 'objection';
import { Account } from '@interfaces/accounts.interface';

export class Accounts extends Model implements Account {
  id!: number;
  firstname!: string;
  lastname!: string;
  accountnumber!: number;
  balance!: number;
  email!:string;
  nationality!:string;
  occupation!: string;
  accounttype!: string;
  address!: string;

  static tableName = 'Accounts'; // database table name
  static idColumn = 'id'; // id column name
}

export type AccountsShape = ModelObject<Accounts>;
