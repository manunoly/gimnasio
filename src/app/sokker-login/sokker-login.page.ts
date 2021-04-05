import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sokker-login',
  templateUrl: './sokker-login.page.html',
  styleUrls: ['./sokker-login.page.scss'],
})
export class SokkerLoginPage implements OnInit {
  credentialForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.credentialForm = this.fb.group({
      ilogin: ['', [Validators.required, Validators.minLength(3)]],
      ipassword: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  // Easy access for form fields
  get ilogin() {
    return this.credentialForm.get('ilogin');
  }

  get ipassword() {
    return this.credentialForm.get('ipassword');
  }

  sokkerLogin(){

  }
}
