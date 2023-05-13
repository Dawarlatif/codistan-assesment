import { Injectable } from '@nestjs/common';
import * as fs from 'fs';


@Injectable()
export class ParentService {
   // private readonly parentData: any[];

   // constructor() {
   //    const rawData = fs.readFileSync('./parent/Parent.json');
   //    this.parentData = JSON.parse(rawData.toString()).data;
   // }

   async findAll() {
      // for all Parents
      const result = await fs.promises.readFile('./files/Parent.json', 'utf-8');
      const parsedData = JSON.parse(result)
      const Parents = parsedData.data
      return Parents

      // for all Children
      // const result = await fs.promises.readFile('./files/Child.json', 'utf-8');
      // const parsedData = JSON.parse(result)
      // const Children = parsedData.data
      // return Children 
   }


   async findOne(id: number) {
      // for children of a specific parents i.e patent 1

      const result = await fs.promises.readFile('./files/Child.json', 'utf-8');
      const parsedData = JSON.parse(result)
      const allChildren = parsedData.data
      const filteredChildren = allChildren.filter(eachChild => eachChild.parentId == id)
      return filteredChildren
   }
}
