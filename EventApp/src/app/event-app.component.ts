import { Component } from '@angular/core';

@Component({
  selector: 'event-app-root',
  template:`
  <div>
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  </div>
 
  <!-- <h2>Hello world Nisal</h2>
  <img src = "/assets/images/basic-shield.png"/> -->
  `
 
})
export class EventAppComponent {
  title = 'EventApp';
}
