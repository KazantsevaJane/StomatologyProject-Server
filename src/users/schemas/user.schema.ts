import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document, Schema as sh } from "mongoose";
import {TherapyData} from "./therapyData.schema";

export type UserDocument = User & Document

@Schema()
export class User{
    @Prop()
    id : string
    @Prop()
    email: string
    @Prop()
    password: string
    @Prop()
    photo: string
    @Prop()
    firstName: string
    @Prop()
    lastName: string
    @Prop()
    patronymic: string
    @Prop()
    DOB: string
    @Prop()
    role: string
    @Prop()
    therapyList: TherapyData[]
    @Prop()
    photoDocuments: any[]
}

export const UserSchema = SchemaFactory.createForClass(User)