import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {AuthUserDto} from "./dto/auth-user.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService{
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}
    async signIn(authUserDto: AuthUserDto): Promise<any> {
        const user = await this.usersService.getByEmail(authUserDto.email);
        if (user?.password !== authUserDto.password) {
            throw new UnauthorizedException();
        }
        const payload = { username: user.email, sub: user.id };
        return {
            accessToken: await this.jwtService.signAsync(payload),
            user: {email: user.email,
                    id: user.id}
        };
    }

}
