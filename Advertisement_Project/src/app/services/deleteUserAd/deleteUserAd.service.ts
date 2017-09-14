import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import {LoginService} from '../../services/login/login.service'


@Injectable()
export class DeleteUserAdService {

    constructor(private _http: Http) { }

    deleteAd(postId:string) {
        
        let headers = new Headers();
        let url = "http://192.168.3.144:9000/post?postId="+postId;
        console.log(LoginService.auth_token);
        headers.append('auth-token',LoginService.auth_token);
        //let options = new RequestOptions({ headers: headers });
        let obj= this._http.delete(url).map((response: Response)=>response.json()); 
        obj.subscribe((data)=>{
            console.log(data);
            if(data.data.result===true)
            {
                alert("Ad Deleted Successfully!");
            }
            else
            {
                 alert("Ad Deletion Unsuccessful!");
            }
        });   
    }
}