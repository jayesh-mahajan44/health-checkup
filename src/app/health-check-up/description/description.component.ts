import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { HealthCheckUpServiceService } from "src/app/health-check-up-service.service";

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.scss"],
})
export class DescriptionComponent implements OnInit  {
  constructor(
    private router: Router,
    private service: HealthCheckUpServiceService
  ) {}
  urlParam;
  data;
  type = 0;
  selectLabPartner1 = true;
  ngOnInit(): void {
    this.check();
  }

  check() {
    this.urlParam = this.router.url.split("/");
    console.log(this.urlParam);
    this.service.healthPackages.map((x) => {
      if (x.category == this.urlParam[3]) {
        this.data = x.healthPackage[this.urlParam[4]];
        console.log(this.data);
      }
    });
  }

  sellingPrice() {
    return Math.round(
      this.data.marketPrice - (this.data.marketPrice * this.data.discount) / 100
    );
  }

   navigate() {

    this.urlParam = this.router.url.split("/");
    console.log(this.urlParam);
    this.service.healthPackages.map((x) => {
      if (x.category == this.urlParam[3]) {
        this.data = x.healthPackage[this.urlParam[4]];
        console.log(this.data);

        this.router.navigate(["health-check-up/order/" + x.category + '/'+ this.urlParam[4]]);
        
      }
    });

  

   

    // this.router.navigate(['health-check-up/order'])
  }
}
