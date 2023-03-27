import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { UserRequest } from '../src/user/gen/user';
import { UserController } from '../src/user/user.controller';
import { UserModule } from '../src/user/user.module';

describe('GRPC transport', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        UserModule,
        ClientsModule.register([
          {
            name: 'USER_PACKAGE',
            transport: Transport.GRPC,
            options: {
              package: ['user'],
              protoPath: join(__dirname, '../src/proto/user.proto'),
            },
          },
        ]),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('getUser', async () => {
    const req: UserRequest = { id: '1' };
    const res = app.get(UserController).getUser(req);

    expect(res.name).toEqual('itiro');
  });
});
