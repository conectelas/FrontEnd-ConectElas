import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let valueArray = value.split(' ');
    valueArray.forEach((word, index = 0) => {
      valueArray[index] = word[0].toUpperCase();
    });
    return valueArray.join(' ');
  }
}
