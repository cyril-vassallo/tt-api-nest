import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';

import { diskStorage } from 'multer';
import { constants } from 'src/Config/conf';
import { FileUrlAndMeta } from 'src/Types/types';
import { imageFileFilter, getFileName } from '../Decorators/multer-validations';

@Controller('/file')
export class FileController {
  constructor(private configService: ConfigService) {}

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/medias/avatars',
        filename: getFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file): Promise<FileUrlAndMeta> {
    if (!file) {
      throw new BadRequestException({
        code: 400,
        message: 'No file received',
      });
    }
    return {
      data: {
        code: 201,
        message: 'uploaded',
        url: `${constants.API_ENDPOINT}/medias/avatars/${file.filename}`,
      },
      meta: {
        method: 'POST',
        urn: '/file/upload',
        uri: this.configService.get<string>('API_ENDPOINT') + '/file/upload',
      },
    };
  }
}
