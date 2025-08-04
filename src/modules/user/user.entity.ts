import { Entity,Column } from "typeorm";
import { CommonEntity } from "@/shared/common/common.entity";

@Entity('users')
export class UserEntity extends CommonEntity{
    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column({default: 'admin'})
    roll?: 'admin' | 'user'
}