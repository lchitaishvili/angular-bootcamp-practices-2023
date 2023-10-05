import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  nickname?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public token: string = 'amdbasdbasmnbd3e123';

  constructor(private http: HttpClient) { }


  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/users');
  }

  public addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3000/users', user);
  }

  public patchUser(id: number, user: Partial<IUser>): Observable<IUser> {
    return this.http.patch<IUser>(`http://localhost:3000/users/${id}`, user);
  }
}
