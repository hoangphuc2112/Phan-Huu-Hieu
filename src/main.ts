import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Cấu hình thư mục chứa file tĩnh (CSS, JS, Images)
  app.useStaticAssets(join(__dirname, '..', 'public'));
  
  // Cấu hình thư mục chứa View (HTML/HBS)
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
  console.log('Server running at http://localhost:3000');
}
bootstrap();