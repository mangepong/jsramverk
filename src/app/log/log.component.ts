import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  logs: any;

  constructor(private logService: LogService) { }

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

   this.logService.getLogs()
      .subscribe((data) => {
        this.logs = data;
      });

}

}
