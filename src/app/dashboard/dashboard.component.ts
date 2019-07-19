import { Component, OnInit } from '@angular/core';

import { SharedService } from '../services/shared.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  revenueData: any;
  categoryData: any;
  curentUser: string;

  constructor(public sharedService: SharedService) { 
    this.revenueData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Visiting card Design',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'Office ID Template',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
    }
    this.categoryData = {
      labels: ['Flyers','Office ID','Letterhead','Visiting card'],
      datasets: [
          {
              data: [30, 50, 10,20],
              backgroundColor: [
                  "#42A5F5",
                  "#9CCC65",
                  "#42A5F5",
                  "#9CCC65"
              ],
              hoverBackgroundColor: [
                  "#42A5F5",
                  "#36A2EB",
                  "#42A5F5",
                  "#9CCC65"
              ]
          }]    
      };
  }

  ngOnInit() {
    this.curentUser = this.sharedService.loggedUser;
    //this.getRevenueChartData();
  }
  getRevenueChartData(){
    this.sharedService.getRevenueData().subscribe(data => {
      this.revenueData = data.datasets; 
      console.log(this.revenueData);
    })
  }
}
