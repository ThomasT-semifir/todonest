import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModel, TodoSchema } from './core/schemas/todo.schema';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [
    MongooseModule.forFeature([{name: TodoModel.name, schema: TodoSchema}])
  ],
})
export class TodoModule {}
