import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraypipe',
  pure:false
})
export class ArraypipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.join();
  }

}
