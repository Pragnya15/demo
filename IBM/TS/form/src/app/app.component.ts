import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form';
  formGrp= new FormGroup(
    {
          name:new FormControl("abc"),
          email:new FormControl("")

    }

  );
  ngOnInit(): void {
    
     
    
  }
  onSubmit(frmGrp:FormGroup)
  {
    console.log(frmGrp.value['name']); 
    console.log(frmGrp.value['email']);  

  }
}
