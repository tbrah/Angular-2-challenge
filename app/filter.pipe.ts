import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter', pure:false})
export class FilterPipe implements PipeTransform {
  transform(row: any, currentSearch: any): any {
    //check if search term is undefined
    if(currentSearch === undefined) return row;
    // return updated list array
     return row.filter(function(row:any){
      return row.text.toLowerCase().includes(currentSearch.toLowerCase());
    });
  }
}
