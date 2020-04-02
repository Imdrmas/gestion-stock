import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../services/SignUpInfo';
import { AuthService } from '../services/AuthService';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: any = {};
  isSignedUp = false;
  signUpInfo: SignUpInfo;
  showSpinner = false;
  isSignUpFailed = false;
  errorMessage = false;
  rolesLength: number;

  constructor(private authService: AuthService, public toastController: ToastController,
              private router: Router, private modalCarl: ModalController) { }

  ngOnInit(): void {

  }
  onSubmit() {
    this.showSpinner = true;
    this.signUpInfo = new SignUpInfo(
        this.form.name,
        this.form.username,
        this.form.email,
        this.form.password
    );

    this.authService.signUp(this.signUpInfo).subscribe(data => {
      this.isSignedUp = true;
      console.log('Register Successfully');
      this.presentToast();
      this.showSpinner = false;
      this.isSignedUp = true;
      this.isSignUpFailed = false;
      this.dismissModal();
    }, error => {
      this.errorMessage = error.error.message;
      this.isSignUpFailed = true;
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Register have been saved successfully.',
      duration: 4000,
      position: 'top',
    });
    toast.present();
  }
    dismissModal(): void {
    this.modalCarl.dismiss();
  }
}
