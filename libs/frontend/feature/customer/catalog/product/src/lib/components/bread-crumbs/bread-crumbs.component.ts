import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ProductFeatureShared } from "../../shared/product-feature.shared";
import { FadeInAnimation } from "@iorder-next/frontend/core/shared/animations";

@Component({
  standalone: true,
  imports: [],
  selector: 'io-customer-feature-catalog-product-bread-crumbs',
  template: `
  <div [@fadeIn]="{value: '', params: { time:100, delay: 50}}">
    io-customer-feature-catalog-product-bread-crumbs
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ FadeInAnimation ]
})
export class FrontendFeatureCustomerCatalogProductBreadCrumbsComponent extends ProductFeatureShared {

}
