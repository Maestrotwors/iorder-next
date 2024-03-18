import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileTabItemComponent } from './profile-tab-item.component';

describe('ProfileTabItemComponent', () => {
  let component: ProfileTabItemComponent;
  let fixture: ComponentFixture<ProfileTabItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileTabItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
