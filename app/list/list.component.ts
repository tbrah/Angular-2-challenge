import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { ListService } from '../list.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    constructor(private popupService:PopupService, private listService:ListService){}


    editBtn(row:any){
      this.popupService.editLog(row);
    }

    deleteBtn(row:any){
      this.listService.undoList.push(row);
      this.listService.list.splice(this.listService.list.indexOf(row), 1);
    }

}
