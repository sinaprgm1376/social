import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { UserNameTypes } from '@/shared/types';
import { TokensService } from '@/modules/tokens/tokens.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor (
        private readonly tokensService: TokensService, 
        private readonly userService: UserService
    ) {}

    async login(user : UserNameTypes) {
        const isUser = await this.userService.findUser(user.username);
        if(!isUser){
            throw new ForbiddenException('کاربری یافت نشد');
        }
        return isUser;
    }
}