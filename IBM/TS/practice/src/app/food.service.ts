import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  public getFood():any{

    let foodList:any [] = [
     {
       "id":1,
       "name":"Pizza",
       "foodId":"F-01"
     },
     {
      "id":2,
       "name":"Burger",
       "foodId":"F-02"
     },
     {
      "id":3,
      "name":"Roll",
      "foodId":"F-03"
     }

    ];
    return foodList;
   }

}
