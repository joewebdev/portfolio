import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    links = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/examples', label: 'Examples' }
    ]
  constructor() { }

  ngOnInit() {
  }

}
