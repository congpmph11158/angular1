import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    desc: '',
    status: false,
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/89/a2/66/69f041ba7b0cb97acc01f52ac9ab5c40.jpg'
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddProduct() {
    // console.log(this.product.img.split("\\")[this.product.img.split("\\").length - 1])

    this.productService.addProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/product')
    })
  }
}
