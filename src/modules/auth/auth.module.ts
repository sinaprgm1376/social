import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TokensModule } from '@/modules/tokens/tokens.module';
import { UserModule } from '@/modules/user/user.module';

@Module({
  imports : [TokensModule,UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
