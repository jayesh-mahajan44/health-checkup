import { JsonPipe } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HealthCheckUpServiceService } from "src/app/health-check-up-service.service";

@Component({
  selector: "app-order-page",
  templateUrl: "./order-page.component.html",
  styleUrls: ["./order-page.component.scss"],
})
export class OrderPageComponent implements OnInit {
  constructor(
    private service: HealthCheckUpServiceService,
    public router: Router
  ) {}
  urlParam;
  data;
  Data;
  LocalStorageData;
  CourierCharge = 75;
  totalDiscount =1299;
  totalSellingPrice = 1499;
  totalMarketPrice = 2799;
  ngOnInit(): void {
    this.dynamicRouting();

    this.LocalStorageData = this.service.getLocalStorage("BookingOrders");

    // this.totalDiscount = this.LocalStorageData.map(x=> this.totalDiscount +  x.discount)
    // this.totalSellingPrice = this.LocalStorageData.map(x=> this.totalSellingPrice +  x.sellingPrice)
    // this.totalMarketPrice = this.LocalStorageData.map(x=> this.totalMarketPrice +  x.marketPrice)


  }


  dynamicRouting() {
    this.urlParam = this.router.url.split("/");
JSON.parse
    this.service.healthPackages.map((x) => {
      if (x.category == this.urlParam[3]) {
        this.Data = x.healthPackage[this.urlParam[4]];

        this.data = this.service.getLocalStorage("BookingOrders") || [];

          this.data.push(this.Data);
          this.service.setLocalStorage("BookingOrders",this.data);
        }
      
      
    });
  }

  remove(item) {
    if (this.LocalStorageData.length > 1) this.LocalStorageData.splice(item, 1);
    this.service.setLocalStorage("BookingOrders", this.LocalStorageData);
  }

  navigate() {
    this.router.navigate(["health-check-up/home"]);
  }

  booking() {
    alert("Advanced Full Body Check test book successfully");
  }

  sellingPrice(marketPrice, discount) {
    return (
      Math.round(marketPrice - (marketPrice * discount) / 100) +
      this.CourierCharge
    );
  }

  discount(marketPrice, discount) {
    return (
      marketPrice - Math.round(marketPrice - (marketPrice * discount) / 100)
    );
  }
}
