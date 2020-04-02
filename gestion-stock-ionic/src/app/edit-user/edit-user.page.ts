import { Component, OnInit } from '@angular/core';
import { UpdateProfile } from '../services/UpdateProfile';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/AuthService';
import { TokenStorageService } from '../services/TokenStorageService';
import { ModalController, ToastController } from '@ionic/angular';
import { JwtResponse } from '../services/JwtResponse';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  jwtResponse: JwtResponse = new JwtResponse();
  showSpinner = false;
  isSignedUp = false;
  isSignUpFailed = true;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router,
              private storage: TokenStorageService,
              private modalCtrl: ModalController,
              private toastController: ToastController) { }

  ngOnInit() {
    this.authService.getUSerByUsername(this.storage.getUsername()).subscribe(info => {
      this.jwtResponse = info;
      console.log(this.jwtResponse);
    });
  }

  save() {
    this.showSpinner = true;
    this.authService.updateUser(this.jwtResponse, this.jwtResponse.id).subscribe(
        form => {
          this.jwtResponse = form;
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          this.presentToast();
          window.location.reload();
        });
  }
  async onSubmit() {
    this.save();
    this.showSpinner = false;
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Info update successfully',
      duration: 2000
    });
    toast.present();
  }
  dismissModal() {
    this.modalCtrl.dismiss();
    this.showSpinner = false;
  }
}
