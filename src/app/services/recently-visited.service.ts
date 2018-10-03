import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecentlyVisitedService {
  pages: Array<any> = [];

  constructor() { }

  add(page: any) {
    this.pages.push(page);
  }

  get(): Array<any> {
    return this.pages;
  }
}
