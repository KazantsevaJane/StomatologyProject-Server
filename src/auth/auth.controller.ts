import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
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

    @UseGuards(AuthGuard)
    @Get('cabinet')
    getProfile(@Request() req) {
        return req.user;
    }
}