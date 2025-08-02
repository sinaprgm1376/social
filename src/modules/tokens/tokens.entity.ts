import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "@/shared/common/common.entity";

@Entity('tokens')
export class TokenEntity extends CommonEntity {
    @Column({type:"text",unique: true})
    token: string;

    @Column({type:"timestamp"})
    expires_at: Date;

    @Column({type: "boolean",default:false})
    revoked: boolean;

    @Column({ type: 'text', nullable: true })
    ip_address: string;
}