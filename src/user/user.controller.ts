import { Controller } from '@nestjs/common';

import {
  GetUserRequest,
  GetUserResponse,
  UserServiceController,
  UserServiceControllerMethods,
} from './gen/user';
import { UserService } from './user.service';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  getUser(request: GetUserRequest): GetUserResponse {
    return this.userService.getUser(request);
  }
}
