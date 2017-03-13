import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupboxComponent {

  constructor(private popupService:PopupService){}

}
