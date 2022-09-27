import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsDateString } from "@nestjs/class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    label: String;

    @IsOptional()
    @IsString()
    description: String = "";

    @IsOptional()
    @IsBoolean()
    done: Boolean = false;

    @IsOptional()
    @IsDateString()
    endDate: Date;
}