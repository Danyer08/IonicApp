import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      name: 'Machine',
      price: 200,
      amount: 20,
      threshold: 5,
      image: 'https://www.hollisterwhitney.com/wp-content/uploads/2018/02/1-Overhead-Traction-Machine-510px.png'
    },
    {
      name: 'Extractor',
      price: 200,
      amount: 20,
      threshold: 5,
      image: 'http://creditek.co.cr/wp-content/uploads/2016/10/kvib606dss.png'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  logout() {
    this.router.navigate(['accounts/login']);
  }
}
