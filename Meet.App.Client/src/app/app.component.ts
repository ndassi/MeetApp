import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { BaseComponentComponent } from './base-component/base-component.component';
import { HomeComponent } from "./home/home.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavBarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
 export class AppComponent extends BaseComponentComponent{
registered(done:boolean) {
    if(done){
      this.isLogged = true;
    }
}
  title = 'MeetApp';
  
 

} 
