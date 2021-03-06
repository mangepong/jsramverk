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

          login.style.display = "None";
          login2.style.display = "None";
      } else {
          var reports = document.getElementById("reports");
          var reports1 = document.getElementById("reports2");
          var logout = document.getElementById("logout");
          var logout2 = document.getElementById("logout2");

          reports.style.display = "None";
          reports1.style.display = "None";
          logout.style.display = "None";
          logout2.style.display = "None";
      }
  }

}
