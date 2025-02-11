import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoComponent } from './repo.component';

xdescribe('RepoComponent', () => {
  let component: RepoComponent;
  let fixture: ComponentFixture<RepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
