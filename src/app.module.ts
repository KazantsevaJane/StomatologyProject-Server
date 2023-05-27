import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./users/users.module";
import {MongooseModule} from "@nestjs/mongoose";
import {UsersService} from "./users/users.service";
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import * as process from "process";

@Module({
  imports: [
      ConfigModule.forRoot({envFilePath: ['.env']}),
      UsersModule,
      MongooseModule.forRoot(process.env.MONGO_URI),
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
