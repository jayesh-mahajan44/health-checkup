import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthCheckUpServiceService } from 'src/app/health-check-up-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

healthPackages ;
  constructor(private router:Router,private service:HealthCheckUpServiceService) { }

  ngOnInit(): void {

    console.log(this.router.url)
    this.healthPackages = this.service.healthPackages;
  }

  sellingPrice(price,disc){

    return Math.round(price -  (price*disc/100)) ;
  }

  navigate(index,category){

 this.router.navigate(['health-check-up/description/'+category+'/'+index])

  }

}
