import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-event-list-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.css']
})
export class EventListPageComponent implements OnInit {
  events: Array<any>;
  isLoaded = false;
  synth: any;

  constructor(
    private eventService: EventsService,
    private randomService: RandomService
  ) { }

  ngOnInit() {
    this.eventService.listAll()
      .then((results) => {
        results.forEach((event) => {
          event.color = this.randomService.getColor();
        });
        this.isLoaded = true;
        this.events = results;
      });
  }

  handleAddClick() {
    this.events.push({
      name: 'asd',
      type: 'angular is awesome',
      date: new Date(),
      color: this.randomService.getColor()
    });
  }

  handleDeleteClick(index) {
    this.events.splice(index, 1);
  }
}
