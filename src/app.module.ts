import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParentModule } from './parent/parent.module';

@Module({
  imports: [ParentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
