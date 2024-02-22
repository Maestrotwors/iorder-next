import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPageAdminMainComponent } from './frontend-page-admin-main.component';

describe('FrontendPageAdminMainComponent', () => {
  let component: FrontendPageAdminMainComponent;
  let fixture: ComponentFixture<FrontendPageAdminMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageAdminMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendPageAdminMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
