import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private githubApiUrl = 'https://api.github.com';
  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string): Observable<Object> {
    return this.httpClient.get<Object>(`https://api.github.com/users/${githubUsername}`);
  }

  // As per shown in image on website.

  getRepos(username: string): Observable<any[]> {
    const url = `${this.githubApiUrl}/users/${username}/repos?per_page=1000`;
    return this.httpClient.get<any[]>(url);
  }

}



// We can use below code to dynamically call api for say 10 repositories per page for page 1,2,...
// We can use pageChanged() function from HomeComponent.ts to get page number and call repositories
// accordingly we need to change homecomponent.ts file

// getRepos(username: string, page: number = 1, perPage: number = 30): Observable<any[]> {
//   const url = `${this.githubApiUrl}/users/${username}/repos?page=${page}&per_page=${perPage}`;
//   return this.http.get<any[]>(url);
// }
