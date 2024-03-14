import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageLandingSignInComponent } from './frontend-page-landing-sign-in.component';

describe('FrontendPageLandingSignInComponent', () => {
  let component: FrontendPageLandingSignInComponent;
  let fixture: ComponentFixture<FrontendPageLandingSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageLandingSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageLandingSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
