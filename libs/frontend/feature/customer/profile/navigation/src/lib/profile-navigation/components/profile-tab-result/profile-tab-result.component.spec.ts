import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileTabResultComponent } from './profile-tab-result.component';

describe('ProfileTabResultComponent', () => {
  let component: ProfileTabResultComponent;
  let fixture: ComponentFixture<ProfileTabResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileTabResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileTabResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
