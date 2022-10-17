import { Model, ModelObject } from 'objection';
import { Transfer } from '@interfaces/transfers.interface';

export class Transfers extends Model implements Transfer {
  id!: number;
  sendername!:string;
  senderaccountnumber!:number;
  recievername!:string;
  recieveraccountnumber!:number;
  amount!:number;
  naration!:string;

  static tableName = 'transfers'; // database table name
  static idColumn = 'id'; // id column name
}

export type TransfersShape = ModelObject<Transfers>;








