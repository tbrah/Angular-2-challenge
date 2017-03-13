import { Injectable } from '@angular/core';

@Injectable()

export class ListService{
  list = [{id:0, text:"Remember to upload code on github", done:false},{id:1, text:"Remember to send the e-mail to Whitney", done:false}];
  undoList:any = [];
  recentlyAdded:any = [];

  // counts the amount of todo's added
  addedToday = 0;

  currentSearch:any;
  currentTab = "all";

  countDone(){
    let count = 0;
    this.list.forEach(function(object){
      if(object.done === true){
        count++;
      }
    });
    return count;
  }


}
