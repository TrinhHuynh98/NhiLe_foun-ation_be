import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModel } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModel,
    UserModule,
    PrismaModule,
  ],
})
export class AppModule {}
