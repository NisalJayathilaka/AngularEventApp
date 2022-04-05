import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventAppComponent } from './event-app.component';
import { EventListComponent } from './events/events-list-component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastService } from './common/toastr.service';



@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastService
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
