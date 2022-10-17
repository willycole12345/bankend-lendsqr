import { hash } from 'bcrypt';
import { CreateAccountDto } from '@dtos/accounts.dto';
import { CreateTransactionDto } from '@dtos/transactions.dto';
import { HttpException } from '@exceptions/HttpException';
import { Account } from '@interfaces/accounts.interface';
import { Transaction } from '@interfaces/transactions.interface';
import { Transactions } from '@models/transactions.model';
import { Accounts } from '@models/accounts.model';
import { isEmpty } from '@utils/util';


class AccountService {
                  public async createAccount(accountData: CreateAccountDto): Promise<Account> {
                                    if (isEmpty(accountData)) throw new HttpException(400, "userData is empty");
                                
                                    const findUser: Account = await Accounts.query().select().from('accounts').where('accountnumber', '=', accountData.accountnumber).first();
                                    if (findUser) throw new HttpException(409, `This Account ${accountData.accountnumber} already exists`);
                                
                                   const createAccountData: Account = await Accounts.query()
                                    .insert({ ...accountData})
                                    .into('accounts');
                                
                                
                                    return createAccountData;
                                  }
                  public async FundAccount(transactionData: CreateTransactionDto, accountNumber:number): Promise<Account> {
                                    if (isEmpty(transactionData)) throw new HttpException(400, "transactions is empty");
                                
                                    const findUser: Account = await Accounts.query().select().from('accounts').where('accountnumber', '=', transactionData.accountnumber).first();
                                    if (!findUser) throw new HttpException(409, `This Account ${transactionData.accountnumber} already exists`);
                                       
                                    const CurrentBalance=  findUser.balance;
                                    
                                    // console.log(CurrentBalance);
                                        //const totalBalance = parseInt(CurrentBalance, 10) + parseInt(transactionData.amount, 10);
                                        const totalBalance = parseInt(CurrentBalance , 10) + parseInt(transactionData.amount,10);
                                        console.log(totalBalance);
                                        await Accounts.query()
                                              .update({ balance: totalBalance })
                                              .where('accountnumber', '=', accountNumber)
                                              .into('accounts');

                                    const createTransactionData: Transaction = await Transactions.query()
                                    .insert({ ...transactionData})
                                    .into('transactions');
                                    const updateUserData: Account = await Accounts.query().select().from('accounts').where('accountnumber', '=', transactionData.accountnumber).first();
                                    return updateUserData;
                                  }
                 public async withDrawFunds(transactionData: CreateTransactionDto, accountNumber:number): Promise<Account> {
                                    if (isEmpty(transactionData)) throw new HttpException(400, "transactions is empty");
                                
                                    const findUser: Account = await Accounts.query().select().from('accounts').where('accountnumber', '=', transactionData.accountnumber).first();
                                    if (!findUser) throw new HttpException(409, `This Account ${transactionData.accountnumber} already exists`);
                                       
                                    const CurrentBalance =  findUser.balance;
                                    
                                    // console.log(CurrentBalance);
                                        //const totalBalance = parseInt(CurrentBalance, 10) + parseInt(transactionData.amount, 10);
                                        const totalBalance  = parseInt(CurrentBalance , 10) - parseInt(transactionData.amount,10);
                                        console.log(totalBalance);
                                        await Accounts.query()
                                              .update({ balance: totalBalance })
                                              .where('accountnumber', '=', accountNumber)
                                              .into('accounts');

                                    const createTransactionData: Transaction = await Transactions.query()
                                    .insert({ ...transactionData})
                                    .into('transactions');
                                    const updateUserData: Account = await Accounts.query().select().from('accounts').where('accountnumber', '=', transactionData.accountnumber).first();
                                    return updateUserData;
                                  }
                  
}
export default AccountService;