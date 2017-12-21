import { Injectable } from '@angular/core';
import { User } from './exercise';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

declare var window: any;
declare var FB: any;

@Injectable()
export class ExerciseService {

  athlete: User;
  users: User[];
  apiRoot: string;

  constructor(private http: Http, private router: Router) {
    this.apiRoot = `//${window.location.hostname}:8081`;

    window.fbAsyncInit = function () {
      FB.init({
        appId: '135665217111332',
        cookie: true,
        xfbml: true,
        version: 'v2.11'
      });

      FB.AppEvents.logPageView();

    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = <HTMLScriptElement>d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  logout() {
    this.athlete = null;
    this.users = null;
  }

  login(name: string, password: string, fbid?: number, fbpicture?: string) {
    this.http.post(this.apiRoot + "/exercise/player", { name, password, fbid, fbpicture }).subscribe(
      data => {
        this.athlete = data.json();
        this.router.navigate(['exercise']);
      },
      err => {
        console.log(err);
      },
      () => { }
    );
  }

  loginFB() {

    FB.login((response: any) => {
      if (response.authResponse) {
        console.log(response);

        FB.api('/me?fields=name,picture', (response: any) => {
          console.log(response);
          this.login(response.name, 'password', response.id, response.picture.data.url);
        });

      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scopes: 'email,user_photos' });

  }
}
