import { ServerService } from './server.service';
import { User } from '../models/user.modele';
import { baseUrl } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private loggedIn = new BehaviorSubject<boolean>(false);
  // private token: string;

  // get isLoggedIn() {
  //   return this.loggedIn.asObservable();
  // }

  constructor(private http: HttpClient, private router: Router) {
    // console.log('Auth Service');
    // const userData = localStorage.getItem('user');
    // if (userData) {
    //   console.log('Logged in from memory');
    //   const user = JSON.parse(userData);
    //   this.token = user.token;
    //   this.server.setLoggedIn(true, this.token);
    //   this.loggedIn.next(true);

  }

  // public login(email: string, password:string) {
  //   let url = `${baseUrl}login`;
  //   // return this.http.post<User>(url,user,{observe: 'response'})
  //   return  this.http.post<User>(url,
  //     {
  //       username: email,
  //       password: password
  //     })//.shareReplay();
  // }

  public login(email:string, password:string) {
    return  this.http.post(`${baseUrl}login_check`,
    {
      username : email,
      password : password,
    }).pipe(map(response => {
      if (response) {
        this.getUserInfo(email).subscribe((userInfo) => {

          //*CHECK IF PATIENT OR PRATICIEN ANS STORE THE TYPE IN LOCALSTORAGE
          if ("specialite" in userInfo) {
            localStorage.setItem('role', JSON.stringify("praticien"));
          } else {
            localStorage.setItem('role', JSON.stringify("patient"));
          }

          localStorage.setItem('userInfo', JSON.stringify(userInfo));
        },(error) => {
          console.log(error);
        });
        localStorage.setItem('jwt', JSON.stringify(response));
      }
    }));
  }

  public logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('role');
  }

  public getUserInfo(email:string) {
    return this.http.get(`${baseUrl}user/`+email);
  }

  // public logout() {
  //   localStorage.removeItem('csrf_token');
  //   //localStorage.removeItem('userInfo');
  //   localStorage.clear();
  //   this.router.navigate(['/']);
  //   //this.router.navigateByUrl('');
  // }


  // login(user: User) {
  //   if (user.email !== '' && user.password !== '' ) {
  //     return this.server.request('POST', '/login', {
  //       email: user.email,
  //       password: user.password
  //       }).subscribe((response: any) => {
  //         if (response.auth === true && response.token !== undefined) {
  //           this.token = response.token;
  //           this.server.setLoggedIn(true, this.token);
  //           this.loggedIn.next(true);
  //           const userData = {
  //             token: this.token,
  //           };
  //           localStorage.setItem('user', JSON.stringify(userData));
  //           this.router.navigateByUrl('');
  //         }
  //       });
  //   }
  // }

  // logout() {
  //   this.server.setLoggedIn(false);
  //   delete this.token;

  //   this.loggedIn.next(false);
  //   localStorage.clear();
  //   this.router.navigate(['/']);
  // }

  //   login(user: User) {
  //   return this.http.post(`${ baseUrl }authentication_token`, user);
  // }
}
