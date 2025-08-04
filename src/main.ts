import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() { 
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api/v1')

  const config = new DocumentBuilder()
  .setTitle('Apis Social')
  .setDescription('all apis here!')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  if(process.env.NODE_ENV !== 'production'){
    SwaggerModule.setup('api/v1/docs', app, document);
  }
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
