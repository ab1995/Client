import { Component,NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import {LoginService} from '../../services/login/login.service'


@Injectable()
export class PostAdService {

    constructor(private _http: Http, private loginService:LoginService) { }

    postUserAd(adDetails:any)
    {
        let loginSer:LoginService;
        let url = "http://127.0.0.1:9090/postAd"; 
        let headers = new Headers();
        console.log('in post ad service', LoginService.auth_token);
        headers.append('auth-token',LoginService.auth_token);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"title": adDetails.postAdTitle, "name": adDetails.postAdName, "category": adDetails.postAdCategory, "description": adDetails.postAdDescription};
        let obj= this._http.post(url, jsonReq, options)
			.map((response: Response)=>response.json());

        obj.subscribe((data)=>{
            console.log(data);
            alert("Ad Posted Successfully!");
        });
    }

}


