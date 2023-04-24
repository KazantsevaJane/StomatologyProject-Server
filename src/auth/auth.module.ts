import { Module } from '@nestjs/common';
import { UsersModule } from "../users/users.module";
import { UsersService} from "../users/users.service";
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";


@Module({
  imports: [UsersModule,
    JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}