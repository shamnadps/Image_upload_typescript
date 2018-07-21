import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageUploadModule } from 'image_upload/image_upload.module';

@Module({
  imports: [ImageUploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
