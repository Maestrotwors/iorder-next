import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageLandingRegisterComponent } from './frontend-page-landing-register.component';

describe('FrontendPageLandingRegisterComponent', () => {
  let component: FrontendPageLandingRegisterComponent;
  let fixture: ComponentFixture<FrontendPageLandingRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageLandingRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageLandingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
