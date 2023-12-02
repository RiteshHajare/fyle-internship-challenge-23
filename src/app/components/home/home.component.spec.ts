import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiService', ['getUser', 'getRepos']);
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParamMap: of(convertToParamMap({ username: 'testuser' })) } },
        { provide: ApiService, useValue: spy }
      ]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user data and repositories on init', () => {
    const mockUserData = { login: 'testuser' };
    const mockRepos: any[] = [];

    apiServiceSpy.getUser.and.returnValue(of(mockUserData));
    apiServiceSpy.getRepos.and.returnValue(of(mockRepos));

    component.ngOnInit();

    expect(apiServiceSpy.getUser).toHaveBeenCalledWith('testuser');
    expect(apiServiceSpy.getRepos).toHaveBeenCalledWith('testuser');

    expect(component.user).toEqual(mockUserData);
    expect(component.repos).toEqual(mockRepos);
    expect(component.loader).toBeFalse();
  });

  it('should get current page on page change', () => {
    component.pageChanged(2);
    expect(component.currentPage).toBe(2);
  });
});
