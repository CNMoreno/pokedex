import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any) {
    if (!isValidObjectId(value))
      throw new BadRequestException(`${value} is not valid MongoID`);

    return value;
  }
}
