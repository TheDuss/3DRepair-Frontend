import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RepairServiceComponent} from './repairService/repairService.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'repairService',component:RepairServiceComponent},
    {path:'**',component:HomeComponent,pathMatch:'full'}
  
];
