import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { GlobaleModuleConfig } from 'src/config/enum';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get()
  getUsers(): any {
    console.log(
      'print config:',
      this.configService.get(GlobaleModuleConfig.DB),
      this.configService.get(GlobaleModuleConfig.DB_HOST),
      this.configService.get(GlobaleModuleConfig.USER_NAME),
    );
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
