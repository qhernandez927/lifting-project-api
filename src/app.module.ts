import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirestoreModule } from './firestore/firestore.module';
import { RoutinesController } from './routines/routines.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RoutineService } from './routines/routine-service/routine.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FirestoreModule.forRoot({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        keyFilename: configService.get<string>(
          'GOOGLE_APPLICATION_CREDENTIALS',
        ),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, RoutinesController],
  providers: [AppService, RoutineService],
})
export class AppModule {}
