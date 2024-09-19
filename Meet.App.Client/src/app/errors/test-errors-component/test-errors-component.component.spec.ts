import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestErrorsComponentComponent } from './test-errors-component.component';

describe('TestErrorsComponentComponent', () => {
  let component: TestErrorsComponentComponent;
  let fixture: ComponentFixture<TestErrorsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestErrorsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestErrorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
