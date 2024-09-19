import { Component, inject, Input, input, OnInit } from '@angular/core';
import { LoginDto } from '../_models/loginDto';
import { AccountService } from '../_Service/account.service';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from '../_models/registerDto';

@Component({
  selector: 'app-base-component',
  standalone: true,
  imports: [],
  templateUrl: './base-component.component.html',
  styleUrl: './base-component.component.css'
})
export class BaseComponentComponent  implements OnInit{
  accountService = inject(AccountService);
  http = inject(HttpClient);
  
  users :any;
  
  @Input() isLogged:boolean =false;
  
  

  ngOnInit(): void {
    
  }
  getUsers(){
    this.http.get("https://localhost:7194/api/user").subscribe({
      next: response => this.users = response, 
      error: err => console.error(err),
      complete: ()=>{console.log("Request done")}
     })
  }


  
}
