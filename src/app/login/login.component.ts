//import { User } from './user.modele';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //user: User = {};
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // this.form = this.fb.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
    // this.form = new FormGroup({
    //   email: new FormControl('',[Validators.required]),
    //   password: new FormControl('',[Validators.required]),
    // })
  }

  // async onSubmit(form: NgForm) {
  //   this.loginInvalid = false;
  //   this.formSubmitAttempt = false;
  //   if (form.valid) {
  //     try {
  //       await this.authService.login(form.value)
  //     } catch (err) {
  //       this.loginInvalid = true;
  //     }
  //   } else {
  //     this.formSubmitAttempt = true;
  //   }
  // }

  onSubmit(form:NgForm) {

    this.authService.login(form.value['email'],form.value['password'])
      .subscribe(response => {
        this.router.navigateByUrl('/');
      },(error) => {
        console.log(form);
        //! SET ALERT DANGER
        console.log(error);
      });
  }

  // onSubmit(form:NgForm) {

  //   this.authService.login(form.value['email'],form.value['password'])
  //   .pipe(map(response => {
  //     if (response) {
  //       this.authService.getUserInfo(form.value['email']).subscribe((userInfo) => {

  //         //*CHECK IF PATIENT OR PRATICIEN ANS STORE THE TYPE IN LOCALSTORAGE
  //         if ("specialite" in userInfo) {
  //           localStorage.setItem('role', JSON.stringify("praticien"));
  //         } else {
  //           localStorage.setItem('role', JSON.stringify("patient"));
  //         }

  //         localStorage.setItem('userInfo', JSON.stringify(userInfo)),
  //         this.router.navigateByUrl('/');
  //       },(error) => {
  //         console.log(error);
  //       });
  //       localStorage.setItem('jwt', JSON.stringify(response));
  //     }
  //   }));
  // }


  // async onSubmit() {
  //   this.loginInvalid = false;
  //   this.formSubmitAttempt = false;
  //   if (this.form.valid) {
  //     try {
  //       await this.authService.login(this.form.value);
  //       this.router.navigateByUrl('/');
  //     } catch (err) {
  //       this.loginInvalid = true;
  //     }
  //   } else {
  //     this.formSubmitAttempt = true;
  //   }
  // }

  // login() {
  //   this.authService.login(this.user).subscribe(res => {
  //     if (res["token"]) {
  //       localStorage.setItem("token", res["token"]);
  //       this.router.navigateByUrl("/personne");
  //     }
  //     else {
  //       this.router.navigateByUrl("/auth");
  //     }
  //   });
  // }

}
