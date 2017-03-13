import { Injectable } from '@angular/core';

@Injectable()

export class PopupService{

  togglePopUp = false;
  toggleSpecialWrapper = false;
  switchContent = "add";
  current:any;

/*PopUp content for adding a new note*/
  addLog(){
    this.togglePopUp = !this.togglePopUp;
    this.switchContent = "add";
    this.toggleSpecialWrapper = true;
  };

/*Popup content for editing a note*/
  editLog(text:string){
    this.togglePopUp = !this.togglePopUp;
    this.switchContent = "edit";
    this.toggleSpecialWrapper = true;
    this.current = text
  };

/*Popup content for viewing profile*/
  profileLog(){
    this.togglePopUp = !this.togglePopUp;
    this.switchContent = "profile";
    this.toggleSpecialWrapper = false;
  }

/*Close popup box*/
  closeLog(){
    this.togglePopUp = !this.togglePopUp;
  };

}
