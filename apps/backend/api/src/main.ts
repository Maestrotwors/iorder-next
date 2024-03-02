import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { ZodValidationPipe } from 'nestjs-zod';
import { AccessTokenGuard, RolesGuard } from '@iorder-next/backend/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const globalPrefix = config.get<string>('API_PREFIX') || '';
  app.setGlobalPrefix(globalPrefix);
  //app.enableCors();
  app.useGlobalPipes(new ZodValidationPipe());
  //app.useGlobalGuards(new AccessTokenGuard());
  //app.enableShutdownHooks();
  const port = Number(config.get<string>('APP_PORT')) || 4000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
