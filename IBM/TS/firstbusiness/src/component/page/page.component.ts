import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {
  fName:string=""
  // public constructor(){
  // }
  ngOnInit(): void {
    this.fName="Abc";
  }
}
