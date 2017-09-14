import { Component, ViewChild, OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component'
import { CategoryService } from '../../services/category/category.service'
import { FetchAdService } from '../../services/fetchAdvertisements/fetchAd.service'
import {AdListComponent} from '../adList/adList.component'
import {LoginService} from '../../services/login/login.service'


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [CategoryService, FetchAdService, LoginService]
})

export class HomeComponent {

  categories = new Array();


  constructor(private categoryService: CategoryService, private fetchAdService:FetchAdService, private loginService: LoginService) {
    
    categoryService.getCategories().subscribe((data: any) => {
      for (let temp of data)
        this.categories.push(temp.categoryName);
    });


    LoginService.auth_token = localStorage.getItem(name); 
    LoginService.userID=localStorage.getItem("userid");
    //LoginService.userID=localStorage.getItem("username");  
    console.log("username",localStorage.getItem("userid")); 
     
  }

  @ViewChild(AdListComponent)
  private adListObj:AdListComponent;
  chooseCategory(item:any=""){
    this.adListObj.displayAd(item);
  }

  searchAds(searchCriteria:any){
    this.adListObj.displaySearchedAds(searchCriteria)
    console.log(searchCriteria)
  }

  listAllUserAds(temp:any){
    console.log("in parent comp");
    this.adListObj.displayUserAds();
  }

  dummyFunc(temp:any){
      this.adListObj.displayUserAds();
  }

}