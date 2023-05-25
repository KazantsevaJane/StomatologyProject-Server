import {Prop} from "@nestjs/mongoose";
import {TherapyData} from "../schemas/therapyData.schema";

export class CreateNormUserDto{
    readonly id : string
    readonly email: string
    readonly password: string
    readonly photo: string
    readonly firstName: string
    readonly lastName: string
    readonly patronymic: string
    readonly DOB: string
    readonly role: string
    readonly therapyList: TherapyData[]
    readonly photoDocuments: any[]
}