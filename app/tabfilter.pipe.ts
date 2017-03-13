import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'tabFilter', pure:false})
export class TabFilterPipe implements PipeTransform {
  transform(row: any, currentTab: any): any {
    //check if search term is undefined
    if(currentTab === "all"){
      return row;
    } else if (currentTab === "active"){
      return row.filter(function(row:any){
        return row.done === false;
      }); //something more.
    } else if (currentTab === "done"){
      return row.filter(function(row:any){
        return row.done === true;
      }); //something else.
    }
  }
}
