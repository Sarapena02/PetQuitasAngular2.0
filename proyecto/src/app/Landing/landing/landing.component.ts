import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  @Output()
  addLandingEvent = new EventEmitter<String>();

  ngOnInit(): void {
    this.addLandingEvent.emit('');
  }


}
