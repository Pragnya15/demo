import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BookService } from '../../service/book.service';
import { AppConstant } from '../../app/appconstant';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterModule],
  providers:[BookService,AppConstant ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(private bookService:BookService, private route:Router){}

  bookdata:any;

  ngOnInit(): void {
    this.bookService
          .getAllBook()
          .subscribe(data=>{
            this.bookdata=data;
            console.log(data);
          });
  }
  onClick()
  {
    console.log("add")
    this.route.navigateByUrl("/add");
     

  }
  delete(id:number)
  {
    this.bookService.delete(id)
    .subscribe(data=>{            
      this.bookdata=data;
      console.log(data);
    });
    this.route.navigateByUrl("");
  }
}
