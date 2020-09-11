import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private accountService: RegisterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.accountService.logout();
      this.router.navigate(['/'], { relativeTo: this.route });
  }

}
