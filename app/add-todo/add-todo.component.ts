import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { ListService } from '../list.service';

@Component({
  selector: 'add-todo-form',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

    constructor(private popupService:PopupService, private listService:ListService){}

    listText:any;
    profileName:string;

    i = 0;

    closeBtn(){
      this.popupService.closeLog();
    }

    addItemBtn(){
      if(this.listText){
        this.i++;
        //keeping track of how many todos have been added.
        this.listService.addedToday++;
        this.listService.list.push({id:this.i, text: this.listText, done: false});
        this.listService.recentlyAdded.splice(-1, 1);
        this.listService.recentlyAdded.push({id:this.i, text: this.listText, done: false});
        this.listText = "";
        this.popupService.closeLog();
      }
    }
}
