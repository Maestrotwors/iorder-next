import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomerRoutePath } from '@iorder-next/frontend/core/shared/routing-paths';

@Component({
  selector: 'io-customer-shared-footer-desktop',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './frontend-shared-customer-desktop-footer.component.html',
  styleUrl: './frontend-shared-customer-desktop-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendSharedCustomerFooterDesktopComponent {
  linksEnum = CustomerRoutePath;
}
