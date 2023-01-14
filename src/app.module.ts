import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutinesController } from './routines/routines.controller';

@Module({
  imports: [],
  controllers: [AppController, RoutinesController],
  providers: [AppService],
})
export class AppModule {}
