import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-test-errors-component',
  standalone: true,
  imports: [],
  templateUrl: './test-errors-component.component.html',
  styleUrl: './test-errors-component.component.css'
})
export class TestErrorsComponentComponent {

  private http = inject(HttpClient);
  baseUrl:string = "https://localhost:7194/api/Buggy/bad-request/";

  get400Error(){
    this.http.get(this.baseUrl + "bad-request").subscribe({
      next : response => console.log(response),
      error: err=> console.log(err)
    })

  }

  get500Error(){
    this.http.get(this.baseUrl + "server-error").subscribe({
      next : response => console.log(response),
      error: err=> console.log(err)
    })

  }
  get404Error(){
    this.http.get(this.baseUrl + "not-found").subscribe({
      next : response => console.log(response),
      error: err=> console.log(err)
    })

  }

  get404ValidationError(){
    this.http.get("https://localhost:7194/api/account/register", {}).subscribe({
      next : response => console.log(response),
      error: err=> console.log(err)
    })

  }


}
