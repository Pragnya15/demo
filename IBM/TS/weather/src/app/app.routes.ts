import { Routes } from '@angular/router';
import { WeatherdataComponent } from './weatherdata/weatherdata.component';


    
export const routes: Routes = [
    {
      path: "",
      component: WeatherdataComponent,
    },
    {
      path: ":locationName",
      component: WeatherdataComponent,
    },
  ];