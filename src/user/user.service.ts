import { Injectable } from '@nestjs/common';

import { GetUserRequest, GetUserResponse } from './user';

@Injectable()
export class UserService {
  private users: GetUserResponse[] = [
    {
      id: '1',
      name: 'John',
      email: 'john.doe@example.com',
    },
    {
      id: '2',
      name: 'Doe',
      email: 'jane.doe@example.com',
    },
  ];

  getUser(request: GetUserRequest): GetUserResponse {
    return this.users.find((user) => user.id === request.id);
  }
}
