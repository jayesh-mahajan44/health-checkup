import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HealthCheckUpRoutingModule } from './health-check-up-routing.module';
import { HealthCheckUpComponent } from './health-check-up.component';
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { OrderPageComponent } from './order-page/order-page.component';


@NgModule({
  declarations: [HealthCheckUpComponent, HomeComponent, DescriptionComponent, OrderPageComponent],
  imports: [
    CommonModule,
    HealthCheckUpRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class HealthCheckUpModule { }
