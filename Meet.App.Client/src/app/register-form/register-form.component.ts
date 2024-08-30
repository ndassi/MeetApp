import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterDto } from '../_models/registerDto';
import { BaseComponentComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

   registerForm = new FormGroup({
    username : new FormControl(),
    password : new FormControl(),
    re_enter_password: new FormControl()
   });

   register(){
    //this.accountService.register(this.registerForm.value);
    console.log("Register Button clicked");
   }
   passwordControlFeedBack : any = null ;

   controlPassword() {

    if (this.registerForm.value.password == this.registerForm.value.re_enter_password) {
      this.passwordControlFeedBack =  {message :"Greate Job ! Pass word match", color:"red"}
    }else{
      this.passwordControlFeedBack = {message : "password does not match ", color:"danger"}
    }
      if(this.registerForm.value.re_enter_password == null || this.registerForm.value.re_enter_password == ""){
        this.passwordControlFeedBack = null;
      }
    }

}
