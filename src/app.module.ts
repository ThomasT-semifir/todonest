import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TestModule } from './test/test.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TodoModule, 
    TestModule,
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_ADDRESS}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`
      ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
