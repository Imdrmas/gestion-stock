import { CommandService } from './../services/command-service';
import { ModalController } from '@ionic/angular';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../model/rest';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  id: any;
  form: ProductDto = {} as ProductDto;
  showSpinner = false;
  showMessage = false;

  constructor(private commandService: CommandService, private modalCtrl: ModalController, 
    private productService: ProductService) { }

  ngOnInit() {
  
  }
  checkedName() {
    this.productService.productNameExists(this.id, this.form.name).subscribe(data => {
      this.showMessage = data;
    });
  } 
  onSubmit() {
     this.commandService.saveProduct(this.form, this.id).subscribe(product => {
       this.form = product;
       window.location.reload();
     })
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
