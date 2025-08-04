import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenEntity } from './tokens.entity';
import { Repository } from 'typeorm';
import * as jwt from "jsonwebtoken";
import { UserNameTypes } from '@/shared/types';

@Injectable()
export class TokensService {
    constructor(
        @InjectRepository(TokenEntity)
        private tokenRepo: Repository<TokenEntity>
    ){}

    
    private readonly accessSecret = process.env.JWT_ACCESS_SECRET;
    private readonly refreshSecret = process.env.JWT_REFRESH_SECRET;

    private generateTokens(payload : UserNameTypes ){
        const accessToken = jwt.sign(payload,this.accessSecret,{
            expiresIn: '2m'
        });
        const refreshToken = jwt.sign(payload,this.refreshSecret,{
            expiresIn: "5m"
        });

        return {
            accessToken,
            refreshToken
        }
    }

    async createToken(username:string,password:string){
       const tokens = this.generateTokens({username,password});
       const token = this.tokenRepo.create({token:tokens.refreshToken});

       return await this.tokenRepo.save(token);
    }

    validateAccessToken(token: string){
        try{    
            jwt.verify(token,this.accessSecret);
        }catch(e){
            return null;
        }
    }

    validateRefreshToken(token: string){
        try{
            jwt.verify(token,this.refreshSecret);
        }catch(e){
            return null;
        }
    }
}
