import { Component,NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import {LoginService} from '../../services/login/login.service'


@Injectable()
export class MessageService {

    constructor(private _http: Http, private loginSer:LoginService) { }

    sendMessage(message:string, postId:string)
    {
        let loginSer:LoginService;
        let url = "http://192.168.3.144:9000/message"; 
        let headers = new Headers();
        console.log('in post ad service', LoginService.auth_token);
        headers.append('auth-token',LoginService.auth_token);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"message": message, "postId": postId};
        let obj= this._http.post(url, jsonReq, options)
			.map((response: Response)=>response.json());

        obj.subscribe((data)=>{
            console.log("message", data);
            alert("Message Sent!");
        });
    }

}


