import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdinr'
})
export class UsdinrPipe implements PipeTransform {

  transform(value: any, ...args: number[]): any {
    const [x,y]=args;
    console.log(args);
    return value *x;
  }

}
