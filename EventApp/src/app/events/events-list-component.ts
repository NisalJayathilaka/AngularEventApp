import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastService } from "../common/toastr.service";
import { IEvent } from "./shared/event.model";
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

    events:IEvent[]

    constructor(private eventSerive: EventService, private toastr:ToastService, private route:ActivatedRoute)
    {
       
    }

    ngOnInit()
    {
        this.events = this.route.snapshot.data['events']
    }
    handleThumbnailClick(eventName)
    {
        this.toastr.success(eventName)
    }
}