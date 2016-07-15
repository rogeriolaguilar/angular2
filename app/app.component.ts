import { Component } from '@angular/core';
import { CarPartsComponent} from './car-parts.component';

@Component({
  selector: 'functions-pipes-app',
  templateUrl: 'app/app.component.html',
  directives: [CarPartsComponent]

})
export class AppComponent {
  heading = "Ultra Racing Schedule";
}

