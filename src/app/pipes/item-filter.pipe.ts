import { Pipe, PipeTransform } from '@angular/core';
import { ItemModel } from '../models/ItemModel';

@Pipe({
  name: 'itemFilter',
  pure: false
})
export class ItemFilterPipe implements PipeTransform {

  transform(value: ItemModel[], ...args: string[]): any[] {
    if (!args) {
      return value;
    }
    let valueNew =  value.filter(item => item.title.toLowerCase().startsWith(args[0]));
    return valueNew;
  }

}
