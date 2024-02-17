import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'io-customer-page-main',
    standalone: true,
    imports: [
      CommonModule,
      RouterOutlet
    ],
    templateUrl: './frontend-page-customer-main.component.html',
    styleUrl: './frontend-page-customer-main.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerMainComponent {}
