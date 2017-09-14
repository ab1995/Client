import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class CategoryService {

    constructor(private _http: Http) { }

    getCategories() {
        //let url = "  http://www.mocky.io/v2/5978a66d1300000f06c1001b";
        let url = "http://127.0.0.1:9090/categories"
        //let obj = 
        return this._http.get(url).map((response: Response) => response.json());
        // obj.subscribe((data) => {
        //     var cat = JSON.stringify(data);
        //     for(let temp of data.data['itemList'])
        //          console.log(temp.name);
        // });
    }

}


