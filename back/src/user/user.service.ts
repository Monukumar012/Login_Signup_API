import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import { User } from './user.schema'
import { Model } from 'mongoose'
const bcrypt = require('bcrypt');


@Injectable()
export class UserService{

    constructor(@InjectModel(User.name) private userModel:Model<User>){}

    async registerUser(registerData){

        const email = registerData.email;
        const password = registerData.password;

        if(!email || !password){
            return {
                message:"Enter Email and Password",
                success:false,
            }
        }

        const existsingUser = await this.userModel.findOne({email});
        
        if(existsingUser){
            return {
                message:"User Already Exists",
                success:false
            }
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new this.userModel({email,password:hashedPassword});
        await user.save();

        return {
            message:"Register Successfully",
            success:true,
            user
        }
    }

    async loginUser(loginData){

        const email = loginData.email;
        const password = loginData.password;

        if(!email || !password){
            return {
                message:"Enter Email and Password",
                success:false,
            }
        }


        const user = await this.userModel.findOne({email});
        if(!user){
            return {
                message:"User Not Exists",
                success:false
            }
        }

        const match = await bcrypt.compare(password, user.password)

        if(!match){
            return {
                message:"Enter Correct Details",
                success:false,
            }     
        }

        return {
            message:"Login Successfully",
            success:true,
            user
        }
    }
}