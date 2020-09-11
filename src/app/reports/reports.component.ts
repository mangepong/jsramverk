import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: RegisterService,
  ) { }

  ngOnInit() {
      // reloads the page
      if(location.search.indexOf('r') < 0){
          var hash = window.location.hash;
          var loc = window.location.href.replace(hash, '');
          loc += (loc.indexOf('?') < 0? '?' : '&') + 'r';
          window.location.href = loc + hash;;
      }
      if (localStorage.getItem("user")) {
          var login = document.getElementById("login");
          var login2 = document.getElementById("login2");

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
      this.form = this.formBuilder.group({
            title: ['', Validators.required],
            text: ['', Validators.required],
        });

  }

  get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.post(this.form.value.title, this.form.value.text)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigate(['../'], { relativeTo: this.route });
                    // location.reload();
                },
                error: error => {
                    alert("You are not logged in!")
                    console.log(error);
                    this.loading = false;
                }
            });
    }

}
