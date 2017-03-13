import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListService } from './list.service';
import { PopupService } from './popup.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ListComponent } from './list/list.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { PopupboxComponent } from './popup/popup.component';
import { ProfilePopUpComponent } from './profile-popup/profile-popup.component';
import { OrderByDonePipe } from './orderby.pipe';
import { OrderByIdPipe } from './idorder.pipe';
import { TabFilterPipe } from './tabfilter.pipe';
import { FilterPipe } from './filter.pipe';
import { ProfileTabComponent } from './my-header/profile-tab/profile-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    EditTodoComponent,
    ListComponent,
    MyHeaderComponent,
    PopupboxComponent,
    ProfilePopUpComponent,
    OrderByDonePipe,
    OrderByIdPipe,
    TabFilterPipe,
    FilterPipe,
    ProfileTabComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListService, PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
