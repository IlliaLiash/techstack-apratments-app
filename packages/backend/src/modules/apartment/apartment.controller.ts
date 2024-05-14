import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import ApartmentGetQueryDto from './dtos/apartment.getQuery.dto';
import { ValidateMongoId } from '../../utils/pipes/isMongoId.pipe';
import { UpdateApartmentDto } from './dtos/apartment.update.dto';
import { CreateApartmentDto } from './dtos/apartment.create.dto';

@Controller('apartments')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Get()
  @HttpCode(200)
  public getList(@Query() query: ApartmentGetQueryDto) {
    return this.apartmentService.getList(query);
  }

  @Get(':id')
  @HttpCode(200)
  async getById(@Param('id', ValidateMongoId) id: string) {
    const apartment = await this.apartmentService.getById(id);

    if (!apartment) {
      throw new NotFoundException('Apartment not found');
    }

    return apartment;
  }

  @Patch(':id')
  @HttpCode(200)
  async update(@Param('id', ValidateMongoId) id: string, @Body() updateApartmentDto: UpdateApartmentDto) {
    const updatedApartment = await this.apartmentService.update(id, updateApartmentDto);

    if (!updatedApartment) {
      throw new NotFoundException('Apartment not found');
    }

    return updatedApartment;
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteOne(@Param('id', ValidateMongoId) id: string) {
    const deletedApartment = await this.apartmentService.delete(id);

    if (!deletedApartment) {
      throw new NotFoundException('Apartment not found');
    }

    return deletedApartment;
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createApartmentDto: CreateApartmentDto) {
    const createdApartment = await this.apartmentService.create(createApartmentDto);

    return createdApartment;
  }
}
