import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateApartmentDto {
  @IsString()
  @MaxLength(99)
  name: string;

  @IsString()
  @MaxLength(999)
  @IsOptional()
  description: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  rooms: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  price: number;
}
