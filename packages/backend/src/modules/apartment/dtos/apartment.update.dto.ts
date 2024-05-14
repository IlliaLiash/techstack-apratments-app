import { PartialType } from '@nestjs/swagger';
import { CreateApartmentDto } from './apartment.create.dto';

export class UpdateApartmentDto extends PartialType(CreateApartmentDto) {}
