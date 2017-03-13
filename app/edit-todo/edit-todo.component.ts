import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'edit-todo-form',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent {

  constructor(private popupService:PopupService){}

  closeBtn(){
    this.popupService.closeLog();
  }

}
