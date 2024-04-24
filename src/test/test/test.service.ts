import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getHello(): any {
    const data = { text: 'Hello from BlogWebsite!' };
    return data;
  }
}
