import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventsService } from '../../services/events.service';
import { RecentlyVisitedService } from '../../services/recently-visited.service';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.css']
})
export class EventDetailPageComponent implements OnInit, OnDestroy {
  event: any;
  isLoaded = false;

  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute,
    private recentlyVisitedService: RecentlyVisitedService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.eventService.getOneById(params.id)
        .then((result) => {
          this.isLoaded = true;
          this.event = result;
          this.recentlyVisitedService.add(this.event);
        });

    });
  }
  ngOnDestroy() {
    console.log('destroyed!');
  }

}
