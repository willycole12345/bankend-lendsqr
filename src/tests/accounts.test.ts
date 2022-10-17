import App from '../app';
import request from 'supertest';
import { CreateAccountDto } from '../dtos/accounts.dto';
import { CreateTransferDto } from '../dtos/transfers.dto';
import { CreateTransactionDto } from '../dtos/transactions.dto';
import AccountsRoute from '../routes/accounts.route';
import 'mocha';


 
// afterAll(async () => {
//   await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
// });

describe('Testing account', () => {
  describe('[POST] /accounts', () => {
    it('response statusCode 201 / Account Created Successful', async () => {
      const accountData: CreateAccountDto = {
                  firstname: 'william',
                  lastname: 'cole',
                  accountnumber: 1004032021,
                  balance: 1000,
                  email: 'cole.williams84@yahoo.com',
                  nationality: 'Nigeria',
                  occupation: 'Employer',
                  accounttype: 'Current',
                  address: '114 lagos road',
        
      };

      const accountsRoute = new AccountsRoute();
      const app = new App([accountsRoute]);
      return request(app.getServer()).post(`${accountsRoute.path}`).send(accountData).expect(201);
    });
  });

  describe('[POST] /accounts/funduserAccount', () => {
        it('response statusCode 201 / funduser Account Successful', async () => { 
             const transactionData: CreateTransactionDto = {
                  sendername: 'tester',
                  receivername: 'william',
                  accountnumber: 1004032021,
                  amount: 2000,
                  naration: 'personal fund',
                    };
              
            const accountsRoute = new AccountsRoute();
            const app = new App([accountsRoute]);
                    return request(app.getServer()).post(`${accountsRoute.path}`).send(transactionData).expect(201);
            });
     });
     describe('[POST] /accounts/withDrawFunds/', () => {
                  it('response statusCode 201 /withDrawFunds Successful', async () => { 
                       const transactionData: CreateTransactionDto = {
                                    sendername:'tester',
                                    receivername:'williams',
                                    accountnumber: 1004032021,
                                    amount:500,
                                    naration:'removal',
                              };
                        
                      const accountsRoute = new AccountsRoute();
                      const app = new App([accountsRoute]);
                              return request(app.getServer()).post(`${accountsRoute.path}`).send(transactionData).expect(201);
                      });
               });
               describe('[POST] /accounts/FundsTransfer/', () => {
                  it('response statusCode 201 / FundsTransfer Successful', async () => { 
                       const transferData: CreateTransferDto = {
                                    sendername: 'colewilliam',
                                    senderaccountnumber: 1004032021,
                                    receivername: 'william',
                                    receiveraccountnumber: 1004032021,
                                    amount: 5000,
                                    naration: 'testfunding'
                              };
                        
                      const accountsRoute = new AccountsRoute();
                      const app = new App([accountsRoute]);
                              return request(app.getServer()).post(`${accountsRoute.path}`).send(transferData).expect(201);
                      });
               });
});
