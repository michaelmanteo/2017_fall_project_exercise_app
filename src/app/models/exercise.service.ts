import { Injectable } from '@angular/core';
import { User } from './exercise';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

declare var window: any;
declare var FB: any;

@Injectable()
export class ExerciseService {

  athlete: User;
  apiRoot: string;

  constructor(private http: Http, private router: Router) {
    this.apiRoot = "//localhost:3001";


    window.fbAsyncInit = function() {
      FB.init({
        appId      : '135665217111332',
        xfbml      : true,
        version    : 'v2.11'
      });
      FB.AppEvents.logPageView();
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = <HTMLScriptElement>d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  loginFB() {
    FB.login((response: any) => {
      if (response.authResponse) {
       console.log(response);

       FB.api('/me?fields=name', (response: any) => {
         console.log(response);
         this.login(response.name, 'password');
       });

      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
}, { scopes: 'email,user_photos,user_posts'});
  }

  login(name: string, password: string) {
    this.athlete = new User();

    this.http.post(this.apiRoot + "/exercise/player", { name, password }).subscribe(
      data => {
        this.athlete.name = name;
        this.http.get(this.apiRoot + "/exercise/player/todo").subscribe(data => {
          this.athlete.todoList = data.json();

        })

        this.router.navigate(['exercise']);

      },
      err => {
        console.log(err);
      },

      () => { }
    );
  }

}
