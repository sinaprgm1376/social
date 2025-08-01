import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import * as path from "path";

dotenv.config({ path: './.env' });  
dotenv.config({ path: './.dbConfig' }); 

const config : TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [path.join(__dirname, '..', '**', '*.entity.{ts,js}')],
    synchronize: process.env.NODE_ENV !== 'production',
    autoLoadEntities: true,
    logging: process.env.NODE_ENV === 'development',
}

export default config;

export const dataSource = new DataSource(config as any);