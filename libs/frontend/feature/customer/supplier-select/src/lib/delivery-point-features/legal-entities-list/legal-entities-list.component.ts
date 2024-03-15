import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-legal-entities-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-entities-list.component.html',
  styleUrl: './legal-entities-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalEntitiesListComponent {}
