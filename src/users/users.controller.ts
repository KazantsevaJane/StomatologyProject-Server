import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {User} from "./schemas/user.schema";

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {
    }

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAll()
    }

    @Get()
    getOne(@Param('id') id: string): Promise<User> {
        return this.userService.getById(id)
    }

    @Post()
    create(@Body () createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto)
    }
}
