import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { TPaginationOrderDirectionType } from '../../../utils/types/query.type';
import { PRICE_ORDER_DIRECTION_TYPE } from '../../../utils/consts';

export default class ApartmentGetQueryDto {
  @IsOptional()
  @IsEnum(PRICE_ORDER_DIRECTION_TYPE)
  price: TPaginationOrderDirectionType;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  rooms: number;
}
