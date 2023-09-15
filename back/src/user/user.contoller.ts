import {Controller,Post,Inject,Body} from '@nestjs/common'
import { UserService } from './user.service'
import { createUserDto, loginUserDto } from './user.dto';

@Controller('user')
export class UserController{

    constructor(@Inject(UserService) private userService:UserService){}

    @Post('register')
    registerUser(@Body() registerData:createUserDto){
        return this.userService.registerUser(registerData);
    }

    @Post('login')
    loginUser(@Body() loginData : loginUserDto){
        return this.userService.loginUser(loginData);
    }
}