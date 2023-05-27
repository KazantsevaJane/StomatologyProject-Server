import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./users/users.module";
import {MongooseModule} from "@nestjs/mongoose";
import {UsersService} from "./users/users.service";
import { AuthModule } from './auth/auth.module';
import * as process from "process";

@Module({
  imports: [
      UsersModule,
      MongooseModule.forRoot("mongodb+srv://cerebro0305:WundEr741@cluster0.y44pgmf.mongodb.net/?retryWrites=true&w=majority"),
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
