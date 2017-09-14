import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { FetchAdService } from '../../services/fetchAdvertisements/fetchAd.service'
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class LoginService {

    static auth_token:string;
    static userID:string;
    static isLogIn:boolean=false;
    loggedIn$ = new BehaviorSubject<boolean>(LoginService.isLogIn);

    logInStatusChange: Subject<boolean> = new Subject<boolean>();


    constructor(private _http: Http, private fetchAdService:FetchAdService) { }

    loginUser(loginCredentials:any)
    {
        let url = "http://127.0.0.1:9090/login"; 
        let headers = new Headers();
        
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"userName": loginCredentials.loginUserName , "password": loginCredentials.loginPassword};
        let obj= this._http.post(url, jsonReq, options)
        	.map((response: Response)=>response.json());
        
        // let url ="http://www.mocky.io/v2/5978dc821300001e07c100c6";
        // let obj= this._http.get(url).map((response: Response)=>response.json());

        obj.subscribe((data)=>{
            LoginService.auth_token=data["auth-token"];
            LoginService.userID= data.userName;
            console.log("Auth_token: ",data["auth-token"]);
            console.log("UserName: ",data.userName);
            if(LoginService.auth_token!=null)
            {
                this.loggedIn$.next(true);
                LoginService.isLogIn=true;
                console.log("in login", LoginService.isLogIn);
                //this.logInStatusChange.next(LoginService.isLogIn);
                localStorage.setItem(name, LoginService.auth_token);
                localStorage.setItem("userid",LoginService.userID);
               // localStorage.setItem("username", LoginService.userID);
                window.location.reload(true);
            }
            else{
                alert("Login Unsuccessful!");
            }
        });

    }

    registerUser(registerUserData:any)
    {
        let url = "http://127.0.0.1:9090/register"; 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"firstName": registerUserData.registerFirstName, "lastName": registerUserData.registerLastName, "userName": registerUserData.registerUserName, "password": registerUserData.registerPassword, "email": registerUserData.registerEmail, "phone": registerUserData.registerMobileNumber};
        console.log(jsonReq)
        let obj= this._http.post(url, jsonReq, options).map((response: Response)=>response.json());
        obj.subscribe((data)=>{
            console.log(data);//Registration successful
            if(data.message==="Registration successful")
            {
                alert("Registration Successful!");
            }
            else{
                alert("Registration Unsuccessful!");
            }
        });  
        
    }

    // getAuthToken()
    // {
    //     return this.auth-token;
    // }

}


