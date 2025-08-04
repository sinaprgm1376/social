import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserNameTypes } from '@/shared/types';
import { LoginDto } from '@/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() body: LoginDto){
    const payload : UserNameTypes = body;
    this.authService.login(payload);
  }
}
