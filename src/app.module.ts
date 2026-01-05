import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // <-- Bắt buộc phải có
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule], // <-- Đăng ký HttpModule ở đây
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}