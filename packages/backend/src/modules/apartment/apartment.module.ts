import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Apartment, ApartmentSchema } from '../../shemas/apartment.schema';
import { ApartmentController } from './apartment.controller';
import { ApartmentService } from './apartment.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Apartment.name, schema: ApartmentSchema }])],
  controllers: [ApartmentController],
  providers: [ApartmentService]
})
export class ApartmentModule {}
