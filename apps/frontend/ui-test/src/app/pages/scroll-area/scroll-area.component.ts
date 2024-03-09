import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-next-scroll-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-area.component.html',
  styleUrl: './scroll-area.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollAreaComponent {}
