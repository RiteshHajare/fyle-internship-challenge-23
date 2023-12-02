import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  loader = true;
  user: any = {};
  p: number = 1;
  repos: any = [];
  twitterUrl = "https://twitter.com/" + this.user.twitter_username;
  currentPage: number = 1;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const user = params.get('username');
      if (user != null) {
        this.apiService.getUser(user).subscribe(res => {
          this.user = res;
          this.apiService.getRepos(this.user.login).subscribe(repos => {
            this.repos = repos;
            this.loader = false;
          });
        })

      }

    });
  }

  pageChanged(pageNo: number) {
    this.currentPage = pageNo;

    // we can use below code for commented code in ServiceWorker.js File. We are requesting
    // 10 repositories per page for page number coming dynamically in pageChanged function
    // and finally concatinating it to repos array

    // this.apiService.getRepos(this.username.login, pageNo, 10).subscribe(repositories => {
    //   this.repos.concat(repositories);
    //   this.loader = false;
    // });
  }


}
