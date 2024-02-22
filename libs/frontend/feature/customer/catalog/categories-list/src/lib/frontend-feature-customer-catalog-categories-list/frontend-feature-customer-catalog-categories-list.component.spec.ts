import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureCustomerCatalogCategoriesListComponent } from './frontend-feature-customer-catalog-categories-list.component';

describe('FrontendFeatureCustomerCatalogCategoriesListComponent', () => {
    let component: FrontendFeatureCustomerCatalogCategoriesListComponent;
    let fixture: ComponentFixture<FrontendFeatureCustomerCatalogCategoriesListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FrontendFeatureCustomerCatalogCategoriesListComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FrontendFeatureCustomerCatalogCategoriesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
