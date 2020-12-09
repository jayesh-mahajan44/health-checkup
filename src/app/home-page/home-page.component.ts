import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { HealthCheckUpServiceService } from '../health-check-up-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private service:HealthCheckUpServiceService,public router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
this.router.navigate(['health-check-up/home'])
  }

}
