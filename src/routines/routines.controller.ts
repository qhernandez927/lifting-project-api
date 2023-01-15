import { Controller, Get, Post } from '@nestjs/common';
import { RoutineService } from './routine-service/routine.service';

@Controller('routines')
export class RoutinesController {
  constructor(private routineService: RoutineService) {}
  @Post()
  findAll(name): string {
    console.log(name, 'this is name');
    const doc = {
      name: 'Quinn',
    };
    this.routineService.create(doc);
    return 'Testing one two three';
  }
}
