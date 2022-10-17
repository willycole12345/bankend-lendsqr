// import App from '@/app';
// import request from 'supertest';
// import { CreateUserDto } from '../dtos/users.dto';

// afterAll(async () => {
//   await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
// });

// describe('Testing Users', () => {
//   describe('[POST] /account', () => {
//     it('response statusCode 201 / Account Created', async () => {
//       const userData: CreateUserDto = {
//         email: 'test@email.com',
//         password: 'q1w2e3r4',
//       };

//       const usersRoute = new UserRoute();
//       const app = new App([usersRoute]);
//       return request(app.getServer()).post(`${usersRoute.path}`).send(userData).expect(201);
//     });
//   });

//   describe('[PUT] /users/:id', () => {
//     it('response statusCode 200 / updated', async () => {
//       const userId = 1;
//       const userData: CreateUserDto = {
//         email: 'test@email.com',
//         password: 'q1w2e3r4',
//       };

//       const usersRoute = new UserRoute();
//       const app = new App([usersRoute]);
//       return request(app.getServer()).put(`${usersRoute.path}/${userId}`).send(userData).expect(200);
//     });
//   });
// });
