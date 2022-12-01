import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RoleInterface } from '../Interfaces/interfaces';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  job: string;

  @Prop()
  description: string;

  @Prop()
  photo: string;

  @Prop(raw({ name: { type: String }, permissions: { type: [String] } }))
  role: RoleInterface;
}

export const UserSchema = SchemaFactory.createForClass(User);
