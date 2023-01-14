import { Controller, Get } from '@nestjs/common';

@Controller('routines')
export class RoutinesController {
  @Get()
  findAll(): string {
    return 'Testing one two three';
  }
}
