import { Component,NgModule, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CategoryService} from '../../services/category/category.service'
import {LoginComponent} from '../login/login.component'
import {PostAdvertisementComponent} from '../postAdvertisement/postAd.component'
import {LoginService} from '../../services/login/login.service'
import { Subscription } from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router'
import {UserInfoService} from '../../services/userinfo/userinfo.service'
import {LogOutService} from '../../services/logout/logout.service'


@Component({
  selector: 'myheader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CategoryService, LoginService, UserInfoService, LogOutService],
  outputs: ['searchEvent', 'listUserAdEvent']

})

export class HeaderComponent{
 
    categories=new Array();
    temp:boolean;
    public searchEvent = new EventEmitter<any>();
    public listUserAdEvent = new EventEmitter<any>();
    userFirstName:string;
    userLastName:string;
    userUserName:string;

    constructor(private categoryService:CategoryService, private loginService:LoginService, private userinfoService:UserInfoService, private logOutService:LogOutService )
    {    
      if(LoginService.auth_token!=undefined)
        this.temp=true;

      categoryService.getCategories().subscribe((data:any) => {
            for(let temp of data)
                 this.categories.push(temp.categoryName);
      });

      this.userinfoService.getUserInfo().subscribe((data)=>{
          console.log(data.data.user);
          this.userFirstName=data.data.user.firstName;
          this.userLastName=data.data.user.lastName;
          this.userUserName=data.data.user.userName;
      });

    }

  getUserData(){

  }

  listUserAds()
  {
    console.log("in header comp listUserAds");
    this.listUserAdEvent.emit("");
  }


  logOutUser(){
    this.logOutService.logOut();
    localStorage.clear();
    window.location.reload(true);
  }
    

  onSearch(searchText:string, searchCategory:string){
    console.log(searchText," ", searchCategory);
    this.searchEvent.emit({"searchText":searchText,"searchCategory":searchCategory});
  }

  //   authSubscription: Subscription;
  //   ngOnInit()
  //   {

  //   this.authSubscription = this.loginService.loggedIn$.subscribe(loggedIn => {
  //     if (loggedIn===true) {
  //       console.log("success");
  //     } else {
  //       console.log("failure");
  //     }
  //   });  
  // }
}