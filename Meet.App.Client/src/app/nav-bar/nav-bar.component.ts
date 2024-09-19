import { Component, inject, Input, output, Output } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AccountService } from '../_Service/account.service';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent extends BaseComponentComponent {

  model:any = {};
  loginForm  = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),

  });

 @Input() override isLogged: boolean = false;
   Logged = output<boolean>();
   toastr:ToastrService = inject(ToastrService);

 login(user:any){
  var loginDto = user.value;
  this.accountService.login(loginDto).subscribe(
    {
      next : response =>{
        this.isLogged = this.accountService.currentUser() != null;
        this.Logged.emit(true);
        console.log(this.accountService.currentUser());
        ;
      },
      error: err => {
        console.log(err);
        this.toastr.error(err.error);

      }
    }
  );

}

logout(){
  this.accountService.logout();
  this.isLogged = this.accountService.currentUser() != null;
}
   

}
