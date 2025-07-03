import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuicklinkDirective } from 'ngx-quicklink';

@Component({
  selector: 'procure-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  standalone: true,
  imports: [RouterLink, QuicklinkDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  id = input<string | null>(null);
  label = input<string | null>(null);
  link = input<string | null>(null);
  backgroundColor = input<string | null>(null);

  openInNewTab = input<boolean, boolean | string>(false, {
    transform: booleanAttribute,
  });

  condensed = input<boolean, boolean | string>(false, {
    transform: booleanAttribute,
  });

  class = computed(() => `badge ${this.condensed() ? 'badge--condensed' : ''}`);
}
