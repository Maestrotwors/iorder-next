import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'io-admin-page-main',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './frontend-page-admin-main.component.html',
    styleUrl: './frontend-page-admin-main.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageAdminMainComponent {}
