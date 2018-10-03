import { Component, OnInit } from '@angular/core';

import { RecentlyVisitedService } from './services/recently-visited.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  pages: Array<any> = [];

  constructor(private recentlyVisitedService: RecentlyVisitedService) {}

  ngOnInit() {
    this.pages = this.recentlyVisitedService.get();
  }
}
