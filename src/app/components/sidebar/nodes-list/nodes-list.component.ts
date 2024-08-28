import { Component, input, signal } from '@angular/core';
import { JsonPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nodes-list',
  standalone: true,
  imports: [NgTemplateOutlet, JsonPipe, NgClass, FontAwesomeModule],
  templateUrl: './nodes-list.component.html',
  styleUrl: './nodes-list.component.css',
})
export class NodesListComponent {
  nodes = input<any>([]);
  isExpaned = signal(false);

  onClick() {
    this.isExpaned.set(!this.isExpaned());
  }
}
