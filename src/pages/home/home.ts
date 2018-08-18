import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  myForm: FormGroup;

  isName: boolean = false;
  isEmail: boolean = false;
  isPhone: boolean = false;
  isPassword: boolean = false;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  validate(data){
    if(data == 'name'){
      this.isName = true;
    }
    else if(data == 'email'){
      this.isEmail = true;
    }
    else if(data == 'phone'){
      this.isPhone = true;
    }
    else if(data == 'password'){
      this.isPassword = true;
    }
  }

  submit(){

  }

}