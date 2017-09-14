import { Component } from '@angular/core';
import {LoginService} from './services/login/login.service'
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'my-app',
  template: `<home></home>
  <!--router-outlet></router-outlet-->`,
  providers: [LoginService]
})
export class AppComponent  {

 }
