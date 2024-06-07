import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { AppConstant } from '../../app/appconstant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers:[BookService,AppConstant],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  constructor(private bookService:BookService,private activatedRoute:ActivatedRoute,private router:Router){};
  bookData:any; 
  ngOnInit(): void {

    console.log("ngOnInit");
    let id=this.activatedRoute.snapshot.params['id'];
    this.bookService
        .getBookById(id)
        .subscribe(result=>{
 
         this.bookData=result;
         console.log(result);
       
       });
 
  
   }
}
