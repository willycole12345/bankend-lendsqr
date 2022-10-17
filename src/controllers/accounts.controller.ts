import { NextFunction, Request, Response } from 'express';
import { CreateAccountDto } from '@dtos/accounts.dto';
import { CreateTransactionDto } from '@dtos/transactions.dto';
import { CreateTransferDto } from '@dtos/transfers.dto';
import { Account } from '@interfaces/accounts.interface';
import accountService from '@services/accounts.service';

class AccountsController {
  public accountService = new accountService();

  public createAccount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const accountData: CreateAccountDto = req.body;
      const createAccountData: Account = await this.accountService.createAccount(accountData);
      res.status(201).json({ data: createAccountData, message: 'created' });
    } catch (error) {
      next(error);
      res.status(201).json({ message: 'Account Not created' });
    }
  };

  public funduserAccount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const transactionData: CreateTransactionDto = req.body;

      const createTransactionData: Account = await this.accountService.FundAccount({ ...transactionData, amount: +transactionData.amount });
      res.status(201).json({ data: createTransactionData, message: 'Account funded Successfully' });
    } catch (error) {
      next(error);
      res.status(201).json({ message: 'Account cannot be funded at the moment' });
    }
  };

  public withDrawFunds = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const transactionData: CreateTransactionDto = req.body;
      //const accountNumber = transactionData.accountnumber;
      const createTransactionData: Account = await this.accountService.withDrawFunds({ ...transactionData, amount: +transactionData.amount });
      res.status(201).json({ data: createTransactionData, message: 'Withdrawal was successfully' });
    } catch (error) {
      next(error);
      res.status(201).json({ message: 'Withdrawal was not successful' });
    }
  };

  public FundsTransfer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const transferData: CreateTransferDto = req.body;
      //const accountNumber = transactionData.accountnumber;
      const createTransferData: Account = await this.accountService.FundsTransfer({ ...transferData, amount: +transferData.amount });
      res.status(201).json({ data: createTransferData, message: 'Transfer was successfully' });
    } catch (error) {
      next(error);
      res.status(201).json({ message: 'Transfer was not successful' });
    }
  };
}

export default AccountsController;
