import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrival-page',
  templateUrl: './arrival-page.component.html',
  styleUrls: ['./arrival-page.component.scss']
})
export class ArrivalPageComponent implements OnInit {

  constructor(private router: Router) { }
  error = "";
  ngOnInit(): void {
  }
  inputChange() {
    this.error = "";
  }
  usernameClicked(username: string) {
    if (!username) {
      this.error = "Username cannot be empty";

    } else {
      this.router.navigate(['/home'], { queryParams: { username } })
    }

  }

}
