Assessment
Demo Credit is a mobile lending app that requires wallet functionality. This is needed as borrowers need a wallet to receive the loans they have been granted and also send the money for repayments.

E-R Diagram link: https://app.dbdesigner.net/designer/schema/567822
You are required to build an MPV wallet service where:

A user can create an account

The api for creation consist of

EndPoints: [POST] https://localhost:3000/accounts

Payload Consist of
Header: {
Content-Type : application/x-www-form-urlencoded
}

Payload Consist of
{
username:
firstname:
lastname:
balance:
email:
occupation:
nationality:
address:
}

A user can fund their account

EndPoints: [POST] https://localhost:3000/accounts/FundAccount

Payload Consist of
Header: {
Content-Type : application/x-www-form-urlencoded
}

Payload Consist of
{

                  sendername:string;
                  recievername:string;
                  accountnumber:number;
                  amount:number;
                  naration:string;

}

A user can transfer funds to another user’s account

EndPoints: [POST] https://localhost:3000/accounts/withDrawFunds

Payload Consist of
Header: {
Content-Type : application/x-www-form-urlencoded
}

Payload Consist of
{

                  sendername:string;
                  recievername:string;
                  accountnumber:number;
                  amount:number;
                  naration:string;

}

A user can withdraw funds from their account.

EndPoints: [POST] https://localhost:3000/accounts/withDrawFunds

Payload Consist of
Header: {
Content-Type : application/x-www-form-urlencoded
}

Payload Consist of
{

                  sendername:string;
                  recievername:string;
                  recieveraccountnumber:number;
                  accountnumber:number;
                  amount:number;
                  naration:string;

}
