import { Component, inject, OnInit } from '@angular/core';
import { LoginDto } from '../_models/loginDto';
import { AccountService } from '../_Service/account.service';
import { HttpClient } from '@angular/common/http';

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

  isLogged:boolean = false;
  
  login(user:any){
    var loginDto = user.value;
    this.accountService.login(loginDto).subscribe(
      {
        next : response =>{
          this.isLogged = this.accountService.currentUser() != null;
          console.log(response);
        },
        error: err => console.log(err)
      }
    );

  }

  logout(){
    this.accountService.logout();
    this.isLogged = this.accountService.currentUser() != null;
  }

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
