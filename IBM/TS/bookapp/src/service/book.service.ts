import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstant } from '../app/appconstant';
import { IBook } from '../interface/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient, private bookConfig:AppConstant) {}

  getAllBook():Observable<IBook>
  {
   let fullUrl:string= this.bookConfig.BASE_URL+":"+this.bookConfig.BASE_Port+"/"+this.bookConfig.GET_ALL_BOOK;
   return this.http.get<IBook>(fullUrl);
  }
  getBookById(id:number):Observable<IBook>{

    let fullUrl:string= this.bookConfig.BASE_URL+":"+this.bookConfig.BASE_Port+"/"+this.bookConfig.GET_BOOK_BY_ID+id;
    return this.http.get<IBook>(fullUrl);
   }
   update(book:any)
   {

      let fullUrl:string= this.bookConfig.BASE_URL+":"+this.bookConfig.BASE_Port+"/"+this.bookConfig.UPDATE_BOOK;
      return this.http.put(fullUrl,book);
   }
   delete(id:number)
   {

      let fullUrl:string= this.bookConfig.BASE_URL+":"+this.bookConfig.BASE_Port+"/"+this.bookConfig.DELETE_BOOK+id;
      return this.http.delete(fullUrl);
   }
  save(book:any)
   {

      let fullUrl:string= this.bookConfig.BASE_URL+":"+this.bookConfig.BASE_Port+"/"+this.bookConfig.SAVE_BOOK;
      return this.http.post(fullUrl,book);
   }

}



