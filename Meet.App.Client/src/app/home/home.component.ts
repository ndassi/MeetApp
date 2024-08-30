import { Component } from '@angular/core';
import { RegisterFormComponent } from "../register-form/register-form.component";
import { BaseComponentComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends BaseComponentComponent {

  showRegisterForm  = false; 
  showLearnMore  = false; 

  GotoRegisterForm(){
    this.showRegisterForm = !this.showRegisterForm;
  }
  GotoLearnMore(){
    this.showLearnMore = !this.showLearnMore;
  }

}
