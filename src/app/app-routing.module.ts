import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path:'health-check-up',loadChildren: ()=> import('./health-check-up/health-check-up.module').then(m=>m.HealthCheckUpModule)
  },
  {path:'home-page',component:HomePageComponent},
  {
    path:'',redirectTo:'home-page', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
