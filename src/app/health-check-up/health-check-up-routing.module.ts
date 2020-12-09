import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DescriptionComponent } from "./description/description.component";
import { HealthCheckUpComponent } from "./health-check-up.component";
import { HomeComponent } from "./home/home.component";
import { OrderPageComponent } from './order-page/order-page.component';

const routes: Routes = [
  {
    path: "",
    component : HealthCheckUpComponent,
    children : [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "description/:type/:id",
        component: DescriptionComponent,
      },
  
      {
        path:'order/:type/:id', component:OrderPageComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthCheckUpRoutingModule {}
