import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderByDone', pure:false})
export class OrderByDonePipe implements PipeTransform {
  transform(row: Array<string>, args: string): Array<string> {

     row.sort((a: any, b: any) => {
       if (a.done < b.done) {
         return -1;
       } else if (a.done > b.done) {
         return 1;
       } else {
         return 0;
       }
     });
     return row;
   }
}
