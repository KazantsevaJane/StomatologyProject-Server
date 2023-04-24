import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {CreateUserDto} from "./dto/create-user.dto";
import {User, UserDocument} from "./schemas/user.schema";
import {Model} from "mongoose";
import { Schema } from "mongoose";
import {FindByMailDto} from "./dto/findByMail.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async getAll(): Promise<User[]>{
        return this.userModel.find().exec()
    }

    async getById(id: string): Promise<User> {
        return this.userModel.findById(id)
    }

    async getByEmail(findByMailDto: FindByMailDto): (Promise<User> | undefined) {
        const mail = new this.userModel(findByMailDto)
        return this.userModel.findOne({Mail: mail.Mail})
    }

    async create(userDto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(userDto)
        return newUser.save()
    }

}