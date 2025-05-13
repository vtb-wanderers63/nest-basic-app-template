import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const logger = new Logger(`${AppService.name} - ${this.getHello.name}`);
    logger.log('Lets get hello!');
    return 'Hello World!';
  }
}
