import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import {HydratedDocument} from 'mongoose'

// export type UserDocument = User & Document;
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User{

    

    @Prop({required:true,type:String})
    email:string;

    @Prop({required:true,type:String})
    password:string;
    
}

export const UserSchema = SchemaFactory.createForClass(User);