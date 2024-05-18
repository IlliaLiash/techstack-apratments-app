import { Command } from 'nestjs-command';
import { Injectable, Logger } from '@nestjs/common';
import aprtmentSeedData from './apartment.seedData';
import { ApartmentService } from '../../apartment.service';

@Injectable()
export class ApartmentSeeder {
  protected readonly logger = new Logger(ApartmentSeeder.name);

  constructor(private readonly apartmentService: ApartmentService) {}

  async run() {
    await this.seedUsers();
  }

  @Command({ command: 'seed:apartments' })
  async seedUsers() {
    await this.apartmentService.createMany(aprtmentSeedData);

    this.logger.log('Created apartments');

    process.exit();
  }
}
