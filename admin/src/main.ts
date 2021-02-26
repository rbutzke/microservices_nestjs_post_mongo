import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200'
  }),
  app.setGlobalPrefix('api')
  await app.listen(8000);
  
}
bootstrap();


