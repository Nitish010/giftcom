import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Product } from '../Model/Product';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-prod-create',
  templateUrl: './prod-create.component.html',
  styleUrls: ['./prod-create.component.css']
})
export class ProdCreateComponent implements OnInit {

  constructor( private shared: SharedService, private router : Router) { }

  editProduct:Product = new Product()
  ngOnInit(): void {
  }

  addProduct() {
    this.shared.setSharedVariable(this.editProduct)
    this.router.navigateByUrl('/product')
  }

}
