import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../model/rest';
import { CommandService } from '../services/command-service';
import { ModalController } from '@ionic/angular';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  id: any;
  form: ProductDto = {} as ProductDto;
  showSpinner = false;

  constructor(private modalCtrl: ModalController, 
    private productService: ProductService) { }

  ngOnInit() {
    console.log(this.id);
    this.productService.findProductById(this.id).subscribe(pro => {
      this.form = pro;
      
    })
  }
 
  onSubmit() {
     this.productService.updateProduct(this.form, this.id).subscribe(product => {
       this.form = product;
       window.location.reload();
     })
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
