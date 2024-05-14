import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';
import { TPaginationOrderDirectionType } from '../../../utils/types/query.type';
import { PRICE_ORDER_DIRECTION_TYPE } from '../../../utils/consts';

export default class ApartmentGetQueryDto {
  @IsOptional()
  @IsEnum(PRICE_ORDER_DIRECTION_TYPE)
  price: TPaginationOrderDirectionType;

  @IsOptional()
  @IsInt()
  @Min(1)
  rooms: number;
}
