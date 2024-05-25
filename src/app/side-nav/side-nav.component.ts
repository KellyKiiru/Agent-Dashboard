import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @Input()  isExpanded!: boolean;
  @Output() toggleMenu = new EventEmitter();

}
