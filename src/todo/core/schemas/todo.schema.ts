import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";
import { Todo } from "../interfaces/todo.interface";

export type TodoDocument = TodoModel & Document;

@Schema()
export class TodoModel implements Todo {
    _id: ObjectId

    @Prop()
    label: String;

    @Prop({default: ""})
    description: String;

    @Prop({default: false})
    done: Boolean;

    @Prop({default: Date.now() + (1000 * 60 * 60 * 24 * 7)})
    endDate: Date;
}

export const TodoSchema = SchemaFactory.createForClass(TodoModel);