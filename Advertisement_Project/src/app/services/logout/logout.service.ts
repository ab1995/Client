import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import {LoginService} from '../../services/login/login.service'


@Injectable()
export class LogOutService {

    constructor(private _http: Http) { }

    logOut() {
        
        let headers = new Headers();
        let url = "http://127.0.0.1:9090/logout";
      
        headers.append('auth-token',LoginService.auth_token);
        let options = new RequestOptions({ headers: headers });
        let obj=this._http.delete(url, options).map((response: Response)=>response.json()); 
        obj.subscribe((data)=>{
             console.log(data);
         });   
    }
}