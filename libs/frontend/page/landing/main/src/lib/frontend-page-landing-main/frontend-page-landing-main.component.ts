import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'io-landing-page-main',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './frontend-page-landing-main.component.html',
    styleUrl: './frontend-page-landing-main.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageLandingMainComponent {}
