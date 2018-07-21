import { Module } from '@nestjs/common';
import { ImageUploadController } from './image_upload.controller';
import { ImageUploadService } from './image_upload.service';

@Module({
  controllers: [ImageUploadController],
  providers: [ImageUploadService],
  exports: [ImageUploadService],
})
export class ImageUploadModule {}
