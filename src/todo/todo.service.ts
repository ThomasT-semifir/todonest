import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './core/dtos/create-todo.dto';
import { TodoDocument, TodoModel } from './core/schemas/todo.schema';

@Injectable()
export class TodoService {

    constructor(@InjectModel(TodoModel.name) private todoModel: Model<TodoDocument>){}

    public findAll(): any {
        return this.todoModel.find();
    }

    public create(todo: CreateTodoDto): Promise<TodoModel> {
        return this.todoModel.create(todo);
    }

    
}
