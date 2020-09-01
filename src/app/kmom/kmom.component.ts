import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kmom',
  templateUrl: './kmom.component.html',
  styleUrls: ['./kmom.component.css']
})
export class KmomComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit() {
      var path = this.route.snapshot.routeConfig.path;
      var kmom01 = "<h4> Me sida för jsramverk </h4> <p> För att starta sidan behöver du först installera alla node moduler med `npm install` sen kan du skriva `ng serve -o` och då kommer en filk att öppnas i en webbläsare. </p>" +
     "<h4> Installationer av modulerna </h4>" +
     "<p> I terminalen så skriver du `npm install -g @angular/cli` för att först ladda ner angular cli. För att sen skapa ditt projekt så kör du `ng new my-app`. </p>" +
     "<p> Nu kommer den att ska ett angular projekt som du kan öppna med det kommando som står i början: `ng serve -o` </p>" +
     "<h4> Github Repo </h4>" +
     "<p> https://github.com/mangepong/jsramverk </p>"


    if(path == "reports/kmom01") {
        console.log("kmom01");
        document.getElementById('content').innerHTML = kmom01;
    }
  }

}