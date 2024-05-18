import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApartmentService } from './apartment.service';
import ApartmentGetQueryDto from './dtos/apartment.getQuery.dto';
import { ValidateMongoId } from '../../utils/pipes/isMongoId.pipe';
import { UpdateApartmentDto } from './dtos/apartment.update.dto';
import { CreateApartmentDto } from './dtos/apartment.create.dto';
import { PRICE_ORDER_DIRECTION_TYPE } from '../../utils/consts';

@ApiTags('apartments')
@Controller('apartments')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Get()
  @ApiOperation({ summary: 'Get apartments list' })
  @ApiResponse({ status: 200 })
  @ApiQuery({ name: 'rooms', type: Number, required: false, description: 'Rooms number' })
  @ApiQuery({ name: 'price', enum: PRICE_ORDER_DIRECTION_TYPE, required: false, description: 'Price sort direction' })
  @HttpCode(200)
  public getList(@Query() query: ApartmentGetQueryDto) {
    return this.apartmentService.getList(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an apartment by id' })
  @ApiOperation({ summary: 'Update an apartment' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 403, description: 'Apartment not found' })
  @HttpCode(200)
  async getById(@Param('id', ValidateMongoId) id: string) {
    const apartment = await this.apartmentService.getById(id);

    if (!apartment) {
      throw new NotFoundException('Apartment not found');
    }

    return apartment;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an apartment' })
  @ApiResponse({ status: 201, description: 'Apartment updated' })
  @ApiResponse({ status: 403, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Apartment not found' })
  @ApiBody({
    type: UpdateApartmentDto,
    description: 'Json structure for apartment object'
  })
  @HttpCode(201)
  async update(@Param('id', ValidateMongoId) id: string, @Body() updateApartmentDto: UpdateApartmentDto) {
    const updatedApartment = await this.apartmentService.update(id, updateApartmentDto);

    if (!updatedApartment) {
      throw new NotFoundException('Apartment not found');
    }

    return updatedApartment;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an apartment' })
  @ApiResponse({ status: 200, description: 'Apartment deleted' })
  @ApiResponse({ status: 404, description: 'Apartment not found' })
  @HttpCode(200)
  async deleteOne(@Param('id', ValidateMongoId) id: string) {
    const deletedApartment = await this.apartmentService.delete(id);

    if (!deletedApartment) {
      throw new NotFoundException('Apartment not found');
    }

    return deletedApartment;
  }

  @Post()
  @ApiOperation({ summary: 'Create an apartment' })
  @ApiResponse({ status: 201, description: 'Apartment created' })
  @ApiResponse({ status: 403, description: 'Bad request' })
  @ApiBody({
    type: CreateApartmentDto,
    description: 'Json structure for apartment object'
  })
  @HttpCode(201)
  async create(@Body() createApartmentDto: CreateApartmentDto) {
    const createdApartment = await this.apartmentService.create(createApartmentDto);

    return createdApartment;
  }
}
