import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Component } from "@angular/core";
import { ToastService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";


@Component({
    selector:'event-list',
    template:`
    <div>
    <h1>Upcomming Angular Event</h1> 
    <hr>
    <div class="row"> 
        <div  *ngFor ='let event of events' class="col-md-5">
           <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]='event'>
           </event-thumbnail>
          </div>
    </div>
    </div>`,
    
})
export class EventListComponent{

    events:any[]

    constructor(private eventSerive: EventService, private toastr:ToastService)
    {
       
    }

    ngOnInit()
    {
        this.events = this.eventSerive.getEvents();
    }
    handleThumbnailClick(eventName)
    {
        this.toastr.success(eventName)
    }
}