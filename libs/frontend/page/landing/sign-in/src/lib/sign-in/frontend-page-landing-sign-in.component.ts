import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-landing-page-sign-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-landing-sign-in.component.html',
  styleUrl: './frontend-page-landing-sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageLandingSignInComponent {}
