import { Component } from '@angular/core';

@Component({
  selector: 'car-parts',
  styleUrls: ['app/car-parts.component.css'],
  templateUrl: 'app/car-parts.component.html'
})

export class CarPartsComponent{
    races = [{
    "id": 1,
    "name": "Daytona Thunderdome",
    "date": new Date('2512-01-04T14:00:00'),
    "about": "Race through the ruins of an ancient Florida battle arena.",
    "entryFee": 3200,
    "isRacing": false
  }, {
    "id": 2,
    "name": "San Francisco Ruins",
    "date": new Date('2512-07-03T20:00:00'),
    "about": "Drift down the streets of a city almost sunk under the ocean.",
    "entryFee": 4700,
    "isRacing": true
  }, {
    "id": 3,
    "name": "New York City Skyline",
    "date": new Date('2512-07-12T21:00:00'),
    "about": "Fly between buildings in the electronic sky.",
    "entryFee": 4300,
    "isRacing": true
  }];
  // Write your function here
  totalCost(){
    let cost=0;
    for(let race of this.races){
      if(race.isRacing){
        cost+=race.entryFee;        
      }
    }
    return cost;
  }

}