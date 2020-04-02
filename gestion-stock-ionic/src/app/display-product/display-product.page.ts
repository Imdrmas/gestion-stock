import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../model/rest';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.page.html',
  styleUrls: ['./display-product.page.scss'],
})
export class DisplayProductPage implements OnInit {
   product: ProductDto = {} as ProductDto;
   id: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    console.log(this.id);
    this.productService.findProductById(this.id).subscribe(pro => {
      this.product = pro;
    });
  }

}
