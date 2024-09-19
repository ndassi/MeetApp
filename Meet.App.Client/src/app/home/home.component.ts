import { Component, Input, output } from '@angular/core';
import { RegisterFormComponent } from "../register-form/register-form.component";
import { BaseComponentComponent } from '../base-component/base-component.component';
import { LearnMoreComponent } from "./learn-more/learn-more.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterFormComponent, LearnMoreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends BaseComponentComponent {
  registeredDone = output<boolean>();
  @Input() override isLogged: boolean = false;
  registered() {
    this.registeredDone.emit(true);
  }

  showRegisterForm  = false; 
  showLearnMore  = false; 

  GotoRegisterForm(){
    this.showRegisterForm = !this.showRegisterForm;
  }
  GotoLearnMore(){
    this.showLearnMore = !this.showLearnMore;
  }

}
