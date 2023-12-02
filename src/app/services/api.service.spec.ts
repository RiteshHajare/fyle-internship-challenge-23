import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let testingColtroller: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule]
    });
    apiService = TestBed.inject(ApiService);
    testingColtroller = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  describe('getUser', () => {
    it('should return user details', () => {
      const username: string = "testUser";
      const mockUser = {};
      apiService.getUser(username).subscribe(res => {
        expect(res).toEqual(mockUser);
      });
      const request = testingColtroller.expectOne(`https://api.github.com/users/${username}`);
      expect(request.request.method).toBe('GET');
      request.flush(mockUser);
    });

  });

  describe('getRepos', () => {
    it('should return all at max 1000 repos', () => {
      const username = 'testUser';
      const repos: jasmine.Expected<jasmine.ArrayLike<any>> = [];
      apiService.getRepos(username).subscribe(res => {
        expect(res).toEqual(repos);
      });
      const request = testingColtroller.expectOne(`https://api.github.com/users/${username}/repos?per_page=1000`);
      expect(request.request.method).toBe('GET');
      request.flush(repos);
    })
  })
});
