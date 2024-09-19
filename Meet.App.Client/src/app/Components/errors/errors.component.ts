import { HttpClient, HttpContext } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-errors',
  standalone: true,
  imports: [],
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.css'
})
export class ErrorsComponent {

  private http =  inject(HttpClient);
  baseUrl:string = "https://localhost:7194/api/buggy/";

  get400Error(){
    this.http.get(this.baseUrl+"bad-request").subscribe({
      next: response => {
        console.log(response)
      },
      error: err => console.log(err)
    })
  }

  get404Error(){
    this.http.get(this.baseUrl+"not-found").subscribe({
      next: response => {
        console.log(response)
      },
      error: err => console.log(err)
    })
  }

get500Error(){
    this.http.get(this.baseUrl+"server-error").subscribe({
      next: response => {
        console.log(response)
      },
      error: err => console.log(err)
    })
  }

  RegisterValidation = {};

getValidationError(){
    this.http.post("https://localhost:7194/api/account/register",  {}).subscribe({
      next: response => {
        console.log(response)
      },
      error: err => {
        console.log(err);
      }
    })
  }




}
