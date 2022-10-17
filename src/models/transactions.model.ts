import { Model, ModelObject } from 'objection';
import { Transaction } from '@interfaces/transactions.interface';

export class Transactions extends Model implements Transaction {
  id!: number;
  sendername!: string;
  receivername!: string;
  accountnumber!: number;
  amount!: number;
  naration!: string;
  // created_dt!: string;

  static tableName = 'transactions'; // database table name
  static idColumn = 'id'; // id column name
}

export type TransactionsShape = ModelObject<Transactions>;
