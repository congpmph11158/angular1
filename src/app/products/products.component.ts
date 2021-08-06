import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(data => {
      this.products = data
    })
  }

  removeItem(id: number) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.products = this.products.filter(product => product.id !== data.id)
    })
  }
}
