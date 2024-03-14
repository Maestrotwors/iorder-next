import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-landing-page-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-landing-register.component.html',
  styleUrl: './frontend-page-landing-register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageLandingRegisterComponent {}
