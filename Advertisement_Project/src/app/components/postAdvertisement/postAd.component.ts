import { Component,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CategoryService} from '../../services/category/category.service'
import {PostAdService} from '../../services/postAdvertisement/postad.service'
import {LoginService} from '../../services/login/login.service'


@Component({
  selector: 'postad',
  templateUrl: './postAd.component.html',
  styleUrls: ['./postAd.component.css'],
  providers: [CategoryService, PostAdService, LoginService]
})

export class PostAdvertisementComponent{

     categories=new Array();

    constructor(private categoryService:CategoryService, private postAdService:PostAdService, private loginService:LoginService)
    {    
        categoryService.getCategories().subscribe((data:any) => {
            for(let temp of data)
                 this.categories.push(temp.categoryName);
        });
    }

    onAdSubmit(adDetails:any){
        if(LoginService.auth_token===undefined)
        {
            alert("Please Sign In to post Ad");
        }
        else
            this.postAdService.postUserAd(adDetails);
        //console.log(adDetails);
    }

}