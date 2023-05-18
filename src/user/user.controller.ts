import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): any {
    return this.userService.getUsers();
  }

  @Get(':id')
  getRange(@Param() params: any): any {
    return this.userService.getRange(parseInt(params.id, 10));
  }

  @Post()
  addUsers() {
    return this.userService.addUsers();
  }
}
