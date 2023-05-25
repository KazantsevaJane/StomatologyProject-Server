import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document, Schema as sh } from "mongoose";
import {AppointmentData} from "./appointmentData.schema";

@Schema()
export class TherapyData{
    @Prop()
    therapyName: string
    @Prop()
    completedAppointments: AppointmentData[]
    @Prop()
    plannedAppointments: AppointmentData[]
}