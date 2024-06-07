import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstcompComponent} from './firstcomp/firstcomp.component'
import {SecondcompComponent} from './secondcomp/secondcomp.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstcompComponent,SecondcompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'helloworld';
}
