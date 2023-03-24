import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string) {
    if (searchText === '') {
      return value;
    }
    console.log(value)
    console.log(searchText)
    return value.filter((items: any) => {
      return items.title.includes(searchText)
    })
  }
}
