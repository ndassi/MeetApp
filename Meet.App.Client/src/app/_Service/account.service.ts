import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "https://localhost:7194/api/Account/";
  http = inject(HttpClient);
  currentUser = signal<User | null>(null);


  login(md:any){
      return this.http.post<User>(this.baseUrl+"login", md).pipe(
        map(user=> {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUser.set(user);
          return user;
        })
      )
  }
  logout(){
    localStorage.removeItem("user");
    this.currentUser.set(null);
    console.log("user logout");
  
  }
}
