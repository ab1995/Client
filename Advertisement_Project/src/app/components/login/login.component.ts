import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service'
import { ActivatedRoute, Router } from '@angular/router'


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})

export class LoginComponent {

    constructor(private loginService: LoginService) {

    }


    onLoginSubmit(loginData: any) {
        this.loginService.loginUser(loginData);
        //this.router.navigate(['user']);


        
    }

    onRegisterSubmit(registerData: any) {
        this.loginService.registerUser(registerData);
        document.getElementById("cancelPostButton").click();
    }

    closeLoginModal() {
        document.getElementById("cancelButton").click();
    }

}