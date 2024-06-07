import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogService } from './dog.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  providers:[DogService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dogimg';
  data:any;
  // data:ICat={"fact":"",length:0};
  constructor(private dogService:DogService){}ngOnInit(): void {
    //result:ICat
    this.dogService.getDog().subscribe((result: any)=>{
      console.log(result);
      this.data=result;
    })
  }
;
refresh(){
  window.location.reload();
}
}
