import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {User} from "./schemas/user.schema";
import {Schema} from "mongoose";
import {FindByMailDto} from "./dto/findByMail.dto";

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {
    }

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<User> {
        return this.userService.getById(id)
    }

    // @Get()
    // getOneByMail(@Body () findByMailDto: FindByMailDto): (Promise<User> | undefined) {
    //     return this.userService.getByEmail(findByMailDto)
    // }
    @Get()
    getOneByMail(email: string): (Promise<User> | undefined) {
        return this.userService.getByEmail(email)
    }

    @Post()
    create(@Body () createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto)
    }
}
