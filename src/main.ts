import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads'); // Define your destination folder
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

  const upload = multer({ storage });

  app.use('../../file-upload', express.static('uploads'));
  app.use(
    '../../file-upload',
    upload.fields([
      { name: 'profileImage', maxCount: 1 },
      { name: 'aadharImage', maxCount: 1 },
      { name: 'idProofImage', maxCount: 1 },
    ]),
    (req, res, next) => {
      next();
    },
  );

  await app.listen(3000);
}
bootstrap();
