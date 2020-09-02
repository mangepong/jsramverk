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
      var kmom01 = "<h4> Me sida för jsramverk </h4> <p> För att starta sidan behöver du först installera alla node moduler med <code>npm install</code> sen kan du skriva <code>ng serve -o</code> och då kommer en filk att öppnas i en webbläsare. </p>" +
     "<h4> Development server </h4>" +
     "<p> Run <code>ng serve</code> for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files. </p>" +
     "<h4> Code scaffolding </h4>" +
     "<p> Run <code>ng generate component component-name</code> to generate a new component. You can also use <code>ng generate directive|pipe|service|class|guard|interface|enum|module</code>. </p>" +
     "<h4> Build </h4>" +
     "<p> Run <code>ng build</code> to build the project. The build artifacts will be stored in the <code>dist/</code> directory. Use the <code>--prod</code> flag for a production build. </p>" +
     "<h4> Running unit tests </h4>" +
     "<p> Run <code>ng test</code> to execute the unit tests via Karma. </p>" +
     "<h4> Running end-to-end tests </h4>" +
     "<p> Run <code>ng e2e</code> to execute the end-to-end tests via Protractor. </p>" +
     "<h4> Further help </h4>" +
     "<p> To get more help on the Angular CLI use <code>ng help</code> or go check out the Angular CLI README. </p>" +
     "<h4> Github Repo </h4>" +
     "<p> https://github.com/mangepong/jsramverk </p>"


    if(path == "reports/kmom01") {
        console.log("kmom01");
        document.getElementById('content').innerHTML = kmom01;
    }
  }

}
