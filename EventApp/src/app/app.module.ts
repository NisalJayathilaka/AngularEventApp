import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventAppComponent } from './event-app.component';
import { EventListComponent } from './events/events-list-component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-detials.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';



@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastService,
    EventRouteActivator,
    EventListResolver,
    {
      provide:'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent)
{
   if(component.isDirty)
   {
     return window.confirm('you have not saved this event, do you really want to cancel?')
   }
   return true 
}