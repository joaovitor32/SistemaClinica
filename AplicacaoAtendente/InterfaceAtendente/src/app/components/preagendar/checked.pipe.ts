import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checked'
})
export class CheckedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
