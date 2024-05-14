import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Apartment, ApartmentDocument } from '../../shemas/apartment.schema';
import { TApartmentQuery } from '../../utils/types/query.type';
import { UpdateApartmentDto } from './dtos/apartment.update.dto';
import { CreateApartmentDto } from './dtos/apartment.create.dto';

@Injectable()
export class ApartmentService {
  constructor(@InjectModel(Apartment.name) private apartmentModel: Model<ApartmentDocument>) {}

  getById(id: string): Promise<ApartmentDocument> {
    return this.apartmentModel.findById(id).exec();
  }

  getList(queryParams: TApartmentQuery): Promise<ApartmentDocument[]> {
    const query = this.apartmentModel.find();

    if (queryParams.price) {
      query.sort([['price', queryParams.price]]);
    }

    if (queryParams.rooms) {
      query.where('rooms').equals(queryParams.rooms);
    }

    return query.exec();
  }

  create(newApartment: CreateApartmentDto): Promise<ApartmentDocument> {
    return this.apartmentModel.create(newApartment);
  }

  update(id: string, updateApartment: UpdateApartmentDto): Promise<ApartmentDocument> {
    return this.apartmentModel.findByIdAndUpdate(id, updateApartment, { new: true }).exec();
  }

  delete(id: string): Promise<ApartmentDocument> {
    return this.apartmentModel.findByIdAndDelete(id).exec();
  }
}
