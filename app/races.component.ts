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
  cash = 5000;

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
    console.debug("click enter button name: " + race.name)
    let minToEnter = this.totalCost()+race.entryFee
    if (minToEnter > this.cash) {
      alert("You need more money! You "+this.cash+" but you need "+minToEnter)
    } else {
      race.isRacing = true
    }
  }

  cancelRace(race: Race) {
    console.debug("click exit button to race name: " + race.name)
    race.isRacing = false
  }

}