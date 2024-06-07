import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherdataComponent } from './weatherdata/weatherdata.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WeatherdataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 // title = 'weather';
  //cities = ["London", "Paris", "Moscow", "New York", "Karachi", "Sydney"];
}
