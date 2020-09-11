import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
            
      if (localStorage.getItem("user")) {
          var login = document.getElementById("login");
          var login2 = document.getElementById("login2");

          var report = document.getElementById("reports");
          var report2 = document.getElementById("reports2");

          login.style.display = "None";
          login2.style.display = "None";
      } else {
          var login = document.getElementById("reports");
          var login2 = document.getElementById("reports2");
          var logout = document.getElementById("logout");
          var logout2 = document.getElementById("logout2");

          logout.style.display = "None";
          logout2.style.display = "None";
          login.style.display = "None";
          login2.style.display = "None";
      }
  }

}
