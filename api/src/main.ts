import * as config from 'config';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const dbConfig = config.get('server');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(dbConfig.port);
  console.log(`Application has started on: ${await app.getUrl()}`);
}
bootstrap();
