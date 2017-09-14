import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http'; 
import 'rxjs/add/operator/map'
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import {HomeComponent} from './components/home/home.component'
import {HeaderComponent} from './components/header/header.component'
import {LoginComponent} from './components/login/login.component'
import {PostAdvertisementComponent} from './components/postAdvertisement/postAd.component'
import {AdListComponent} from './components/adList/adList.component'
import {UserPageComponent} from './components/userpage/userpage.component'



@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule
                  //  RouterModule.forRoot([
                  //    {path: 'user', component: UserPageComponent}, 
                  //  ])
                  ],
  declarations: [ AppComponent, HomeComponent, HeaderComponent, LoginComponent, PostAdvertisementComponent, AdListComponent, UserPageComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
