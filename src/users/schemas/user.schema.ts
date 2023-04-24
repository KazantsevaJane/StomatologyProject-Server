import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document, Schema as sh } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User{
    @Prop()
    id : string
    @Prop()
    name: string
    @Prop()
    surname: string
    @Prop()
    DOB: string
    @Prop()
    phoneNumber: string
    @Prop()
    email: string
    @Prop()
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User)