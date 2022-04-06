import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-detials.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListComponent } from "./events/events-list-component";
import { EventListResolver } from "./events/events-list-resolver.service";
import { UserModule } from "./user/user.module";

export const appRoutes:Routes =[
    
    {path:'events/new',component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:'events', component:EventListComponent, resolve:{events:EventListResolver}},
    {path:'events/:id',component:EventDetailsComponent,canActivate: [EventRouteActivator]},
    {path:'404', component:Error404Component},
    {path:'', redirectTo:'/events',pathMatch:'full'},
    {path:'user',loadChildren: ()=> UserModule}
]


// ./app/user/user.module