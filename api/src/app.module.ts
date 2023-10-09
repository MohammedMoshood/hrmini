import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hrmini',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
