import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from '../components/list/list.component';
import { AppConstant } from './appconstant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookapp';
}
