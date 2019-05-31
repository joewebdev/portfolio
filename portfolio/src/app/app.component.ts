import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  links = [
      {path:'/', icon: 'home', label: 'Home'},
      { path: '/skills', icon: 'assignment', label: 'Skills' },
      { path: '/examples', icon: 'important_devices', label: 'Examples of work' }
  ]
}
