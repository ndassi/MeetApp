import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
 export class AppComponent implements OnInit {
  title = 'MeetApp';
  http = inject(HttpClient);
  users :any;
 
  ngOnInit(): void {
   this.http.get("https://localhost:7194/api/user").subscribe({
    next: response => this.users = response, 
    error: err => console.error(err),
    complete: ()=>{console.log("Request done")}
   })
  }

 

} 
