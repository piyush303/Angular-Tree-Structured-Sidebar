import { Component } from '@angular/core';
import { DATA } from '../data';
import { NodesListComponent } from '../nodes-list/nodes-list.component';

@Component({
  selector: 'app-sidebar-wrapper',
  standalone: true,
  imports: [NodesListComponent],
  templateUrl: './sidebar-wrapper.component.html',
  styleUrl: './sidebar-wrapper.component.css',
})
export class SidebarWrapperComponent {
  readonly DATA = DATA;
}
