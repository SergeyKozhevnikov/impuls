import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { tSecuserService } from '#/tSecuser/tSecuser.service';
import { tSecuser } from '#/tSecuser/tSecuser';
import { UUID } from 'crypto';

@Controller('/users')
export class TSecuserController {
  constructor(private readonly tSecuserService: tSecuserService) {}

  @Get('/all')
  findAll(): Promise<tSecuser[]> {
    return this.tSecuserService.findAll();
  }

  @Post('/create')
  create(@Body() newUser: tSecuser): Promise<string> {
    return this.tSecuserService.create(newUser);
  }
  
  @Get(':uuid')
  findOne(@Param('uuid') uuid: UUID): Promise<tSecuser> {
    return this.tSecuserService.findOne(uuid);
  }
}
