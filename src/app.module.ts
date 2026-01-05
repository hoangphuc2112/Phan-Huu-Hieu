import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // <--- 1. Thêm dòng này
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule], // <--- 2. Thêm HttpModule vào trong ngoặc vuông này
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}