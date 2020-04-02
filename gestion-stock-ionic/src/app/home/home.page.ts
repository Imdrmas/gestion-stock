import { DisplayProductPage } from './../display-product/display-product.page';
import { EditProductPage } from './../edit-product/edit-product.page';
import { ProductService } from './../services/product.service';
import { EditCommandPage } from './../edit-command/edit-command.page';
import { async } from '@angular/core/testing';
import { ProductDto } from './../model/rest.d';
import { AddCommandPage } from './../add-command/add-command.page';
import { EditUserPage } from './../edit-user/edit-user.page';
import { Component } from '@angular/core';
import { JwtResponse } from '../services/JwtResponse';
import { CommandDto } from '../model/rest';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../services/TokenStorageService';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/AuthService';
import { CommandService } from '../services/command-service';
import { AddProductPage } from '../add-product/add-product.page';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;
  info: JwtResponse = new JwtResponse();
  showSpinner = false;
  command: CommandDto = {} as CommandDto;
  commands: any[] = [];
  products: any[];
  commandDetails: CommandDto[];
  commandLength: number;
  productLength: number;

  constructor(private route: ActivatedRoute,
              private tokenStorageService: TokenStorageService,
              private alertController: AlertController,
              private router: Router,
              private modalCtrl: ModalController,
              private authService: AuthService,
              private toastController: ToastController,
              private commandService: CommandService,
              private productService: ProductService) {
    this.route.params.subscribe(
        params => {
          this.username = this.route.snapshot.params.username;
          this.authService.getUSerByUsername(this.username).subscribe(info => {
            this.info = info;
            this.commandService.findAllCommandForUser(info.id).subscribe(commands => {
              this.commands = commands;
              this.commandLength = this.commands.length;
            //  this.commands[0].open = true;
            })
          });    
        }
    );
  }

  ngOnInit(): void {
 
  }
  async editUSer(username) {
    const modal = await this.modalCtrl.create({
      component: EditUserPage,
      componentProps: {
        username,
      },
      cssClass: 'cart-modal',
    });
    modal.present();
  }
  logout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
    this.showSpinner = false;
  }
  async presentAlertConfirmDeleteUser(idUser) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to delete it',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.authService.deleteUser(idUser).subscribe(async () => {
              const toast = await this.toastController.create({
                message: 'Register have been deleted successfully.',
                duration: 2000
              });
              toast.present();
              this.logout();
            });
          }
        }
      ]
    });
    await alert.present();
  }
  async addCommand() {
    const modal = await this.modalCtrl.create({
      component: AddCommandPage,
      cssClass: 'add-command-modal',
    });
    modal.present();
  }
  toggleSection(index: any) {
    this.commands[index].open = !this.commands[index].open;
  }
  toggleItem(index: any, childIndex: any) {
    this.commands[index].products[childIndex].open =  !this.commands[index].products[childIndex].open;
  }
 async deleteCommand(id) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to delete it',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.commandService.deleteCommand(id).subscribe(async () => {
              const toast = await this.toastController.create({
                message: 'Command have been deleted successfully.',
                duration: 2000
              });
              toast.present();
              window.location.reload();
            });
          }
        }
      ]
    });
    await alert.present();

  }
async updateCommand(id) {
  const modal = await this.modalCtrl.create({
    component: EditCommandPage,
    componentProps: {
      id,
    },
    cssClass: 'add-command-modal',
  });
  return await modal.present();
 }
 async addProduct(id) {
  const modal = await this.modalCtrl.create({
    component: AddProductPage,
    componentProps: {
      id,
    },
    cssClass: 'add-product-modal',
  });
  return await modal.present();
 }
 async deleteProduct(id) {
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'Are you sure to delete it',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.productService.deleteProduct(id).subscribe(async () => {
            const toast = await this.toastController.create({
              message: 'Product have been deleted successfully.',
              duration: 2000
            });
            toast.present();
            window.location.reload();
          });
        }
      }
    ]
  });
  await alert.present();
 }
 async editProduct(id) {
  const modal = await this.modalCtrl.create({
    component: EditProductPage,
    componentProps: {
      id,
    },
    cssClass: 'add-product-modal',
  });
  return await modal.present();
 }
async displayProduct(id) {
  const modal = await this.modalCtrl.create({
    component: DisplayProductPage,
    componentProps: {
      id,
    },
    cssClass: 'display-product-modal',
  });
  return await modal.present();
}
}