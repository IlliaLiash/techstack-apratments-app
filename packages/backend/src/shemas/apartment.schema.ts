import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Apartment {
  @Prop()
  rooms: number;

  @Prop({ required: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export interface ApartmentDocument extends Document, Apartment {}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);
