import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { ListService } from '../list.service';

@Component({
  selector: 'profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css']
})
export class ProfilePopUpComponent {

  constructor(private popupService:PopupService, private listService:ListService ){}

  closeBtn(){
    this.popupService.closeLog();
  }

}
