import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { AppConstant } from '../../app/appconstant';
import { IBook } from '../../interface/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers:[BookService,AppConstant],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  bookData:IBook={id:0,bookName:"",author:"",pages:0,language:"",price:0,publisher:"",category:""};
  constructor(private bookService:BookService,private router :Router){};
  ngOnInit(): void {
    this.bookData.bookName="";
  }
  onSave()
  {      this.bookService
         .save(this.bookData)
         .subscribe(result=>{console.log(result);});
     console.log(this.bookData);
      this.router.navigateByUrl("/");
  }
 
}
