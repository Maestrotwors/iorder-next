import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageLandingMainComponent } from './frontend-page-landing-main.component';

describe('FrontendPageLandingMainComponent', () => {
  let component: FrontendPageLandingMainComponent;
  let fixture: ComponentFixture<FrontendPageLandingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageLandingMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageLandingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
