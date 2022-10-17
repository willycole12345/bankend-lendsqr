import { CreateAccountDto } from '@dtos/accounts.dto';
import { CreateTransactionDto } from '@dtos/transactions.dto';
import { CreateTransferDto } from '@dtos/transfers.dto';
import { HttpException } from '@exceptions/HttpException';
import { Account } from '@interfaces/accounts.interface';
import { Transactions } from '@models/transactions.model';
import { Accounts } from '@models/accounts.model';
import { isEmpty } from '@utils/util';

class AccountService {
  public async createAccount(accountData: CreateAccountDto): Promise<Account> {
    if (isEmpty(accountData)) throw new HttpException(400, 'accountData is empty');

    const findUser: Account = await Accounts.query().select().from('accounts').where('accountnumber', '=', accountData.accountnumber).first();
    if (findUser) throw new HttpException(409, `This Account ${accountData.accountnumber} already exists`);

    const createAccountData: Account = await Accounts.query()
      .insert({ ...accountData })
      .into('accounts');

    return createAccountData;
  }
  public async FundAccount(transactionData: CreateTransactionDto): Promise<Account> {
    if (isEmpty(transactionData)) throw new HttpException(400, 'transactions is empty');

    const findUser: Account = await Accounts.query().select().from('accounts').where('accountnumber', '=', transactionData.accountnumber).first();
    if (!findUser) throw new HttpException(409, `This Account ${transactionData.accountnumber} already exists`);

    const CurrentBalance = findUser.balance;

    // console.log(CurrentBalance);
    //const totalBalance = parseInt(CurrentBalance, 10) + parseInt(transactionData.amount, 10);
    const totalBalance = CurrentBalance + transactionData.amount;
    console.log(totalBalance);
    await Accounts.query().update({ balance: totalBalance }).where('accountnumber', '=', transactionData.accountnumber).into('accounts');

    await Transactions.query()
      .insert({ ...transactionData })
      .into('transactions');
    const updateUserData: Account = await Accounts.query()
      .select()
      .from('accounts')
      .where('accountnumber', '=', transactionData.accountnumber)
      .first();
    return updateUserData;
  }
  public async withDrawFunds(transactionData: CreateTransactionDto): Promise<Account> {
    if (isEmpty(transactionData)) throw new HttpException(400, 'transactions is empty');

    const Useraccount: Account = await Accounts.query().select().from('accounts').where('accountnumber', '=', transactionData.accountnumber).first();

    const CurrentBalance = Useraccount.balance;
    
      const totalBalance = CurrentBalance - transactionData.amount;

      await Accounts.query().update({ balance: totalBalance }).where('accountnumber', '=', transactionData.accountnumber).into('accounts');

      await Transactions.query()
        .insert({ ...transactionData })
        .into('transactions');
  
    const updateUserData: Account = await Accounts.query()
      .select()
      .from('accounts')
      .where('accountnumber', '=', transactionData.accountnumber)
      .first();
    return updateUserData;
  }

  public async FundsTransfer(transferData: CreateTransferDto): Promise<Account> {
    if (isEmpty(transferData)) throw new HttpException(400, 'transactions is empty');

    const receiverAccountNumber: Account = await Accounts.query()
      .select()
      .from('accounts')
      .where('accountnumber', '=', transferData.receiveraccountnumber)
      .first();
    //if (!receiverAccountNumber) throw new HttpException(409, `This Account ${transferData.receiveraccountnumber} does not exists`);

    const senderAccountdetails: Account = await Accounts.query()
      .select()
      .from('accounts')
      .where('accountnumber', '=', transferData.senderaccountnumber)
      .first();
      console.log(typeof(senderAccountdetails.balance));
      //if (Number.parseInt(senderAccountdetails.balance, 10) >=  0 ) {
      //  throw new HttpException(409, `This Account ${transferData.senderaccountnumber} has insufficent balance`);
     // } else {
      
        const debitsenderaccount = senderAccountdetails.balance - transferData.amount;
        const receiverBalance = receiverAccountNumber.balance;
        const totalBalance = receiverBalance + transferData.amount;

        await Accounts.query().update({ balance: totalBalance }).where('accountnumber', '=', transferData.receiveraccountnumber).into('accounts');
        await Accounts.query().update({ balance: debitsenderaccount }).where('accountnumber', '=', transferData.senderaccountnumber).into('accounts');
    //  }
    
    await Transactions.query()
      .insert({ ...transferData })
      .into('transfers');
    const TransferDetails: Account = await Accounts.query()
      .select()
      .from('accounts')
      .where('accountnumber', '=', transferData.receiveraccountnumber)
      .first();
    return TransferDetails;
  }
}
export default AccountService;
