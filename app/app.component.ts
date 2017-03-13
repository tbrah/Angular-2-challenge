import { Component } from '@angular/core';
import { PopupService } from './popup.service';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private popupservice:PopupService, private listService:ListService){}

  addBtn(){
    this.popupservice.addLog();
  }

  undoBtn(){
    if(this.listService.undoList.length > 0){
      this.listService.list.push(this.listService.undoList[this.listService.undoList.length - 1]);
      this.listService.undoList.pop();
    }
  }

  private tabAll = true;
  private tabActive = false;
  private tabDone = false;
  private searchtesting:any;

  setTab(newValue:any){
    /*Reset values before assigning new to remove the class*/
    this.tabActive = false;
    this.tabDone = false;
    this.tabAll = false;

    if(newValue === 1){
      this.tabAll = true;
      this.listService.currentTab = "all";
    } else if (newValue === 2){
      this.tabActive = true;
      this.listService.currentTab = "active";
    } else if (newValue === 3){
      this.tabDone = true;
      this.listService.currentTab = "done";
    }

  };





}
