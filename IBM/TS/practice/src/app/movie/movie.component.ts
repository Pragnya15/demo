import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MydirDirective } from '../mydir.directive';


@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, FormsModule,MydirDirective],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movies:any[]=[{
    "name":"RRR",
    "rating":3.4,
    "language":"HINDI"
  },
  {
  "name":"12th Fail",
  "rating":9,
  "language":"HINDI"
  }
  ,
  {
  "name":"Fighter",
  "rating":7,
  "language":"HINDI"
  }
  ,
  {
  "name":"Casino Royale",
  "rating":9,
  "language":"ENGLISH"
  }
  
  ]

// attribute:boolean=false
// attr:boolean=false
// attr1:boolean=false
//   show(c:string){
//     if(c=='bold'){
//         this.attribute=true
//         console.log(this.attribute)
//     }
//    else{
//     this.attribute=false
//     console.log('italic')
//    }
//    }

size = '20px';
}

