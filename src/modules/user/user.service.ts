import { UserNameTypes } from '@/shared/types';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepo: Repository<UserEntity>
    ) {}

    async createUser(payload: UserNameTypes){
        try{
            const user = this.userRepo.create(payload);
            return await this.userRepo.save(user);
        }catch(e){
            throw new InternalServerErrorException('خطا در ایجاد کاربر');
        }
    }

    findUser(username: string) {
        return this.userRepo.findOneBy({username});
    }
}