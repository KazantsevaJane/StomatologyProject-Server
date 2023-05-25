import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document, Schema as sh } from "mongoose";
import {Service} from "./service.schema";

@Schema()
export class AppointmentData{
    @Prop()
    numberAppointment: number
    @Prop()
    nameStageTherapy: string
    @Prop()
    dateAppointment: Date | string
    @Prop()
    services: Service[]
    @Prop()
    recommendations?: string
}