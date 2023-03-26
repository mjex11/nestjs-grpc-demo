import { Controller } from '@nestjs/common';

import {
  UserRequest,
  UserResponse,
  UserServiceController,
  UserServiceControllerMethods,
} from './gen/user';
import { UserService } from './user.service';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  getUser(request: UserRequest): UserResponse {
    return this.userService.getUser(request);
  }
}
