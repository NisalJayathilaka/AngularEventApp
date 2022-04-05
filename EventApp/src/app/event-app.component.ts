import { Component } from '@angular/core';

@Component({
  selector: 'event-app-root',
  template:`
  <div>
    <nav-bar></nav-bar>
  <event-list></event-list>
  </div>
 
  <!-- <h2>Hello world Nisal</h2>
  <img src = "/assets/images/basic-shield.png"/> -->
  `
 
})
export class EventAppComponent {
  title = 'EventApp';
}
