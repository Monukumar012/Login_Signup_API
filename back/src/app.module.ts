import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb+srv://monu:admin@cluster0.bzvoelw.mongodb.net/')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
