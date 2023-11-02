import { Module } from '@nestjs/common';
import { FileUploadModule } from './file_upload/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FileUploadModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
