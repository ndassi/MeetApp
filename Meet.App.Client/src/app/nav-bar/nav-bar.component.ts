import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AccountService } from '../_Service/account.service';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { NavLoggedInComponent } from "../Components/nav-logged-in/nav-logged-in.component";



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NavLoggedInComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent extends BaseComponentComponent {

  model:any = {};
  loginForm  = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),

  });

   

}
