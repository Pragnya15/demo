import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { AppConstant } from '../../app/appconstant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers:[BookService,AppConstant],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
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

  onSave()
  {
    this.bookService
    .update(this.bookData)
    .subscribe(data=>{ console.log(data);});

    this.router.navigateByUrl("/");
     


  }
;


}
