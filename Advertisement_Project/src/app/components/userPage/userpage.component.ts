import { Component, ViewChild, OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component'
import { CategoryService } from '../../services/category/category.service'
import {ActivatedRoute, Router} from '@angular/router'
import { FetchAdService } from '../../services/fetchAdvertisements/fetchAd.service'
import {AdListComponent} from '../adList/adList.component'
import {LoginService} from '../../services/login/login.service'


@Component({
  selector: 'userpage',
  templateUrl: './userpage.component.html',
  providers: [CategoryService, FetchAdService, LoginService]
})

export class UserPageComponent {

  categories = new Array();


  constructor(private categoryService: CategoryService, private fetchAdService:FetchAdService, private loginService: LoginService) {
    
    categoryService.getCategories().subscribe((data: any) => {
      for (let temp of data.data['itemList'])
        this.categories.push(temp.name);
    });
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

}