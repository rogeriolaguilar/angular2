import { Component } from '@angular/core';
import { Race } from './race';
import { RACES } from './mocks'

@Component({
  selector: 'races',
  styleUrls: ['app/races.component.css'],
  templateUrl: 'app/races.component.html'
})

export class RacesComponent {
  races: Race[];

  ngOnInit() {
    this.races = RACES;
  }

  totalCost() {
    let cost = 0
    for (let race of this.races) {
      if (race.isRacing) {
        cost += race.entryFee
      }
    }
    return cost;
  }

  enterRace(race: Race) {
    console.debug("click enter button to race name: " + race.name)
    race.isRacing = true
  }

  cancelRace(race: Race) {
    console.debug("click exit button to race name: " + race.name)
    race.isRacing = false
  }

}