import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.filter(value as string);
  }

  filter(value: string) {
    if (value.length > 100) {
      return value.slice(0, 50) + '...';
    }
    return value.slice(0, 30) + '...';
  }
}
