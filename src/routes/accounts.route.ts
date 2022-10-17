import { Router } from 'express';
import AccountsController from '@controllers/accounts.controller';
import { CreateAccountDto } from '@dtos/accounts.dto';
import { CreateTransactionDto } from '@dtos/transactions.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class UsersRoute implements Routes {
  public path = '/accounts';
  public router = Router();
  public accountsController = new AccountsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //this.router.get(`${this.path}`, this.usersController.getUsers);
   // this.router.get(`${this.path}/:id(\\d+)`, this.accountsController.getUserById);
    this.router.post(`${this.path}`, validationMiddleware(CreateAccountDto, 'body'), this.accountsController.createAccount);
    this.router.post(`${this.path}/funduserAccount`, validationMiddleware(CreateTransactionDto, 'body'), this.accountsController.funduserAccount);
    this.router.post(`${this.path}/withDrawFunds`, validationMiddleware(CreateTransactionDto, 'body'), this.accountsController.withDrawFunds);
    //this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    //this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteUser);
  }
}

export default UsersRoute;
