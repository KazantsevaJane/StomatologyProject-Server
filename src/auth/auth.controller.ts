import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import {AuthUserDto} from "./dto/auth-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() authUserDto: AuthUserDto) {
        return this.authService.signIn(authUserDto);
    }
}