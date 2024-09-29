import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VaccineComponent } from './components/categories/vaccine/vaccine.component';
import { PentavalentComponent } from './components/viz/pentavalent/pentavalent.component';
import { PcvComponent } from './components/viz/pcv/pcv.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'vaccine', component:VaccineComponent},
  {path:'vaccine/pentavalent', component:PentavalentComponent},
  {path:'vaccine/pcv', component:PcvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
