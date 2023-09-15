import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./user.contoller";
import { UserService } from "./user.service";
import { User, UserSchema } from "./user.schema";


@Module(
    {
        imports:[MongooseModule.forFeature([{name:User.name, schema:UserSchema}])],
        controllers:[UserController],
        providers:[UserService],
        exports:[]
    }
)
export class UserModule{}