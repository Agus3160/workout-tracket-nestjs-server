import { Module } from '@nestjs/common';
import { ExerciseTypeService } from './exercise-type.service';
import { ExerciseTypeController } from './exercise-type.controller';

@Module({
  controllers: [ExerciseTypeController],
  providers: [ExerciseTypeService],
})
export class ExerciseTypeModule {}
