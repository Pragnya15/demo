import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FoodComponent } from './food/food.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,MovieComponent ,PipedemoComponent,FoodComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
  fname:string=""
  lname:string=""
  full:string=""
 show(){
  this.full=this.fname+this.lname
 }
 isColor:boolean=false
 color(c:string){
  if(c=='red'){
      this.isColor=true
  }
 else{
  this.isColor=false
 }
 }


 

}

