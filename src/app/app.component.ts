import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UserService } from './user.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'it-academy-ng';

  constructor(private router: Router, private userService: UserService) { }

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

  public getUsers(): void {
    this.userService.getUsers().pipe(
      catchError((error) => {
        console.log('Error', error);
        return of([]);
      })
    ).subscribe();
  }

  public addUser() {
    this.userService.addUser({
        id: 2,
        name: 'John',
        username: 'John',
        email: 'John@gmail.com'
    }).subscribe();
  }

  public patchUser() {
    this.userService.patchUser(2, {
      nickname: 'Luka',
    }).subscribe();
  }
}
