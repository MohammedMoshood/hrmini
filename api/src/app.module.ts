import * as config from 'config';
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

const dbConfig = config.get('db');
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: dbConfig.type,
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: dbConfig.synchronize,
    }),
    AuthModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
