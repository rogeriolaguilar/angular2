import { Component } from '@angular/core';
import { RacesComponent} from './races.component';


@Component({
  selector: 'races-app',
  templateUrl: 'app/app.component.html',
  directives: [RacesComponent]

})
export class AppComponent {
  heading = "Ultra Racing Schedule";
  
}

