import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import * as joi from 'joi';

const envFilePath = `.env.${process.env.NODE_ENV || `development`}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 增加全局配置，否则需要去每个 module 自行 import
      envFilePath,
      load: [() => dotenv.config({ path: '.env' })], // 公用配置 '.env' 通过 load 加载
      validationSchema: joi.object({
        DB_PORT: joi.string().default(3306),
        DB_URL: joi.string().domain(),
        DB: joi.string(),
        DB_HOST: joi.string().uri(),
      }),
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
