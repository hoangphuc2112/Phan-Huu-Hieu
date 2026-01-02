import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // <--- QUAN TRỌNG: Thêm dòng này
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule], // <--- QUAN TRỌNG: Thêm HttpModule vào imports
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}