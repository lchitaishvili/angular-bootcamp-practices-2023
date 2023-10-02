import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'it-academy-ng';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started');
      } else if (event instanceof NavigationCancel || event instanceof NavigationEnd) {
        console.log('Navigation ended');
      }
    });
  }

  onNavigate() {
    this.router.navigate(
      ['/custom', 23123213],
      { queryParams: { color: 'Blue', size: 'M' } }
    );
  }
}
