import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoutineService } from './routine-service/routine.service';

@Controller('routines')
export class RoutinesController {
  constructor(private routineService: RoutineService) {}
  @Post()
  findAll(@Body() body: { name: string }): string {
    console.log(body, 'this is name');
    this.routineService.create(body);
    return 'Testing one two three';
  }
}
