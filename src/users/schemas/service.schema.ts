import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document, Schema as sh } from "mongoose";

export type ServiceDocument = Service & Document

@Schema()
export class Service{
    @Prop()
    serviceName: string
    @Prop()
    price: number
    @Prop()
    count: number
    @Prop()
    cost: number
    @Prop()
    doctorProfile: string
}

export const ServiceSchema = SchemaFactory.createForClass(Service)
