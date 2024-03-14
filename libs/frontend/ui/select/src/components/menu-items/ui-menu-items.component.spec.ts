import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiMenuItemsComponent } from './ui-menu-items.component';

describe('UiMenuItemsComponent', () => {
  let component: UiMenuItemsComponent;
  let fixture: ComponentFixture<UiMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiMenuItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
