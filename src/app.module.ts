import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ProfileModule } from './modules/profile/profile.module';
import { TokensModule } from './tokens/tokens.module';
import { TokensModule } from './modules/tokens/tokens.module';
import  DBconfig from "@/root/config/postgres/database.config";

@Module({
  imports: [
      TypeOrmModule.forRoot(DBconfig),
      UserModule,
      ProfileModule,
      TokensModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {} 