import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { tSecuserService } from '#/tSecuser/tSecuser.service';
import { tSecuser } from '#/tSecuser/tSecuser';
import { AuthGuard } from '#/auth/auth.guard';
import { TMessage } from '#/entities/Message';
import { Response } from 'express';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';

function toBase_64(filePath) {
  const img = fs.readFileSync(filePath);

  return Buffer.from(img).toString('base64');
}

@Controller('/users')
export class TSecuserController {
  constructor(private readonly tSecuserService: tSecuserService) {}

  @UseGuards(AuthGuard)
  @Get('/')
  async findAll(@Res() res: Response) {
    const data = await this.tSecuserService.findAll();
    if (data) {
      return res.status(HttpStatus.OK).json(data);
    } else {
      res.status(HttpStatus.NOT_FOUND).json({ message: 'Object not found' });
    }
  }

  @Post('/')
  async create(@Res() res: Response, @Body() newUser: tSecuser) {
    const data = await this.tSecuserService.create(newUser);
    return res.status(data.status).json(data);
  }

  @UseGuards(AuthGuard)
  @Get('/:userlogin')
  async findOne(@Res() res: Response, @Param('userlogin') userlogin: string) {
    const data = await this.tSecuserService.findOne(userlogin);
    if (data) {
      return res.status(HttpStatus.OK).json(data);
    } else {
      res.status(HttpStatus.NOT_FOUND).json({ message: 'Object not found' });
    }
  }

  @UseGuards(AuthGuard)
  @Post(':userlogin/update')
  update(@Body() newUser: tSecuser): Promise<tSecuser> {
    return this.tSecuserService.update(newUser);
  }

  @UseGuards(AuthGuard)
  @Post('/replacepassword')
  replacepassword(@Body() loginpas: any): Promise<tSecuser|string> {
    return this.tSecuserService.replacePassword(loginpas.userlogin, loginpas.oldPass, loginpas.newPass);
  }

  @Post('/recoverypassword')
  recoveryPassword(@Body() userInfo: any) {
    return this.tSecuserService.recoveryPassword(userInfo.userlogin, userInfo.userName, userInfo.userSurname, userInfo.newPass);
  }

  @Post('/loadphoto')
  @UseInterceptors(
    FileInterceptor('file', {storage: diskStorage({
      destination: 'E:/uploads/', 
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        cb(null, `${randomName}${extname(file.originalname)}`)
      }
    })}
    )
  )

  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);

    const base64String = toBase_64('E:/uploads/' + file.filename);
    return base64String;
  }
  

}
