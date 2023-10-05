import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Check API Collection In Postman : https://www.postman.com/hananhanafi/workspace/test-insignia-nestjs' };
  }
}
