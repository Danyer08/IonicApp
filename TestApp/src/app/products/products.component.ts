import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert/alert.service';
import { ProductsService } from '../services/products/products.service';

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
      imageUrl: 'https://www.hollisterwhitney.com/wp-content/uploads/2018/02/1-Overhead-Traction-Machine-510px.png'
    },
    {
      name: 'Extractor',
      price: 200,
      amount: 20,
      threshold: 5,
      imageUrl: 'http://creditek.co.cr/wp-content/uploads/2016/10/kvib606dss.png'
    }
  ];

  constructor(
    private productService: ProductsService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.productService.getProducts().then(products => {
      this.products = products;
    }).catch(error => {
      this.alertService.showMessage(error.message);
    });
  }

}
