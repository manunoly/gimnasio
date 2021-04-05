import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

import * as firebaseui from 'firebaseui'

import {
  FirebaseUISignInSuccessWithAuthResult,
  FirebaseUISignInFailure,
} from 'firebaseui-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.credentialForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async signIn() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.auth.signIn(this.credentialForm.value).then(
      (res) => {
        loading.dismiss();
        this.router.navigateByUrl('/home', { replaceUrl: true });
      },
      async (err) => {
        loading.dismiss();
        const alert = await this.alertController.create({
          header: ':(',
          message: err.message,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  // Easy access for form fields
  get email() {
    return this.credentialForm.get('email');
  }

  get password() {
    return this.credentialForm.get('password');
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    console.log(errorData);
  }

  uiShownCallback() {
    console.log('uiShownCallback');
  }
}
