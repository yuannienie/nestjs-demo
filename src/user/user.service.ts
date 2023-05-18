import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): any {
    return {
      code: 0,
      data: [],
      msg: '请求用户成功',
    };
  }

  getRange(range: number): any {
    return {
      code: 0,
      data: Object.keys(new Array(range).fill(0)).map(
        (i) => parseInt(i, 10) + 1,
      ),
      msg: '请求数据成功',
    };
  }

  addUsers(): any {
    return {
      code: 0,
      data: [],
      msg: '添加用户成功',
    };
  }
}
