import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import {LoginService} from '../../services/login/login.service'


@Injectable()
export class UserInfoService {

    constructor(private _http: Http) { }

    getUserInfo() {
        
        let headers = new Headers();
        let url = "http://192.168.3.144:9000/user?userId="+LoginService.userID;
        console.log(LoginService.auth_token);
        headers.append('auth-token',LoginService.auth_token);
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        //let obj= 
        return this._http.get(url,options).map((response: Response)=>response.json()); 
        // obj.subscribe((data)=>{
        //     console.log(data);
        // });
    }
}


