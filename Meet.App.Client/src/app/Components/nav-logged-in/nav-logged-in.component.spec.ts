import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLoggedInComponent } from './nav-logged-in.component';

describe('NavLoggedInComponent', () => {
  let component: NavLoggedInComponent;
  let fixture: ComponentFixture<NavLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLoggedInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
