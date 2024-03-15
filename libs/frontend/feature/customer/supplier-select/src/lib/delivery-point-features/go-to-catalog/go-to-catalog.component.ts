import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '@io/frontend/ui/button';

@Component({
  selector: 'io-go-to-catalog',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './go-to-catalog.component.html',
  styleUrl: './go-to-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoToCatalogComponent {}
