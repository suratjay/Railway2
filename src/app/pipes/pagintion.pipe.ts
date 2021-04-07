import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PagintionPipe implements PipeTransform {

  transform(items: any[], startPage: number, limitPage: number): any {
    if (items !== null) {
      return items.slice((startPage - 1) * limitPage, startPage * limitPage);
    }

  }
}
