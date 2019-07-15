import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  logout() {
    this.router.navigate(['accounts/login']);
  }
}
