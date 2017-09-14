import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ActionService {

    constructor(private _http: Http) { }

    getActions() {
        let url = "http://192.168.3.144:9000/actions"
        return this._http.get(url).map((response: Response) => response.json());

    }

}


