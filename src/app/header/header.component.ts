import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCheckUpServiceService } from '../health-check-up-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service:HealthCheckUpServiceService,public router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['home-page'])
  }

}


