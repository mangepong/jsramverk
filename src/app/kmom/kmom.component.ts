import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KmomService } from './kmom.service';

@Component({
  selector: 'app-kmom',
  templateUrl: './kmom.component.html',
  styleUrls: ['./kmom.component.css']
})
export class KmomComponent implements OnInit {

    reports: any;

    constructor(private route: ActivatedRoute, private kmomService: KmomService) { }

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

     var kmom = this.route.snapshot.paramMap.get("id");
     this.kmomService.getReports(kmom)
        .subscribe((data) => {
          this.reports = data;
        });

  }

}
