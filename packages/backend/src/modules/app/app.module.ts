import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ApartmentModule } from '../apartment/apartment.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URI), ApartmentModule]
})
export class AppModule {}
