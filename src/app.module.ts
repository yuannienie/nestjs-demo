import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 增加全局配置，否则需要去每个 module 自行 import
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
