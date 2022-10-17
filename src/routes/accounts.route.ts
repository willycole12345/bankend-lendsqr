import { Router } from 'express';
import AccountsController from '@controllers/accounts.controller';
import { CreateAccountDto } from '@dtos/accounts.dto';
import { CreateTransactionDto } from '@dtos/transactions.dto';
import { CreateTransferDto } from '@dtos/transfers.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class AccountsRoute implements Routes {
  public path = '/accounts';
  public router = Router();
  public accountsController = new AccountsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(CreateAccountDto, 'body'), this.accountsController.createAccount);
    this.router.post(`${this.path}/funduserAccount`, validationMiddleware(CreateTransactionDto, 'body'), this.accountsController.funduserAccount);
    this.router.post(`${this.path}/withDrawFunds`, validationMiddleware(CreateTransactionDto, 'body'), this.accountsController.withDrawFunds);
    this.router.post(`${this.path}/FundsTransfer`, validationMiddleware(CreateTransferDto, 'body'), this.accountsController.FundsTransfer);
  }
}

export default AccountsRoute;
