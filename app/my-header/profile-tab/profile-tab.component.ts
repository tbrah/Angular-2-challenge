import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../popup.service';
import { ListService } from '../../list.service';

@Component({
  selector: 'profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent {

    constructor(private popupService:PopupService, private listService:ListService){}

    profileBtn(){
      this.popupService.profileLog();
    }

}
