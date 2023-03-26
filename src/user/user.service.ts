import { Injectable } from '@nestjs/common';

import { UserRequest, UserResponse } from './gen/user';

@Injectable()
export class UserService {
  private users: UserResponse[] = [
    {
      id: '1',
      name: 'itiro',
      point: 51,
    },
    {
      id: '2',
      name: 'matsui',
      point: 55,
    },
  ];

  getUser(request: UserRequest): UserResponse {
    return this.users.find((user) => user.id === request.id);
  }
}
