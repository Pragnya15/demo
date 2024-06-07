import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Kilogram } from '../Kilogram';
@Component({
  selector: 'app-pipedemo',
  standalone: true,
  imports: [CommonModule,FormsModule ,Kilogram ],
  templateUrl: './pipedemo.component.html',
  styleUrl: './pipedemo.component.css'
})
export class PipedemoComponent {
  dt:any= Date.now();
  time:string=''
  sec:number=0
  // show(value){
  //   this.time=value
  // }
  
//   addTime(){
//     console.log(this.time)
//     this.time = (<HTMLInputElement>document.getElementById("time")).value;
//     this.sec=parseInt(this.time)
//     // this.dt=this.dt+this.sec
//     console.log(this.dt)
//     // while(this.sec!=0){
//     //   this.dt=this.dt+1
//     // }
//   }

//   addTime1() {
//     setTimeout(() => {
//       this.dt=this.dt+1
//     },1000);
//  }
// }

}



