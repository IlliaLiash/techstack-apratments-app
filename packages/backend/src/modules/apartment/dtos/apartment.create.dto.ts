import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateApartmentDto {
  @ApiProperty({
    example: 'Super comfortable flat',
    required: true,
    type: String
  })
  @IsString()
  @MaxLength(99)
  name: string;

  @ApiProperty({
    example: 'Super comfortable flat in the center of the city.',
    required: false,
    type: String
  })
  @IsString()
  @MaxLength(999)
  @IsOptional()
  description: string;

  @ApiProperty({
    example: 2,
    required: false,
    type: Number
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  rooms: number;

  @ApiProperty({
    example: 99,
    required: false,
    type: Number
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  price: number;
}
