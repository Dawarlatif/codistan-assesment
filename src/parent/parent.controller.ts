import { Controller, Get, Param } from '@nestjs/common';
import { ParentService } from './parent.service';

@Controller('parent')
export class ParentController {
   constructor(private readonly parentService: ParentService) { }

   @Get("find")
   async findAll() {
      return await this.parentService.findAll();
   }

   @Get('find/:id')
   async findOne(@Param('id') id: number) {
      return await this.parentService.findOne(id);
   }
}
