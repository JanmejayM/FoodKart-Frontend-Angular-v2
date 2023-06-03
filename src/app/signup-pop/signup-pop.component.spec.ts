import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPopComponent } from './signup-pop.component';

describe('SignupPopComponent', () => {
  let component: SignupPopComponent;
  let fixture: ComponentFixture<SignupPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
