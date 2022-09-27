import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateTodoDto } from './core/dtos/create-todo.dto';
import { Todo } from './core/interfaces/todo.interface';
import { TodoModel } from './core/schemas/todo.schema';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {

    constructor(@Inject(TodoService) private readonly service) {}

    @Get()
    public findAll(): String{
        return this.service.findAll()
    }

    @Post()
    public create(@Body() todo: CreateTodoDto): TodoModel{
        return this.service.create(todo);
    }
}
