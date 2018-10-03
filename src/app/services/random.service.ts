import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RandomService {

  constructor() { }

  getColor(): string {
    const red = Math.round(Math.random() * 100) + 150;
    const green = Math.round(Math.random() * 100) + 150;
    const blue = Math.round(Math.random() * 100) + 150;
    return `rgb(${red}, ${green}, ${blue})`;
  }

}


