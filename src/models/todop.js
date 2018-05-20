import {IdGenerator} from '../utilities/idgenerator';
import { inject } from 'aurelia-dependency-injection';
import {    HttpClient} from 'aurelia-fetch-client'
@inject(HttpClient)
export class ApiService {
  constructor(title, completed = false,http) {
    this.id = IdGenerator.getNextId();
    this.title = title;
    this.completed = completed;
    this.http = http;
    this.baseweb = 'http://localhost:1337/'
  }
  getbakery() {
        var url = this.baseweb + 'bakery'
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }
}




// @inject(HttpClient)
// export class ApiService {
//     constructor(http) {
//         this.http = http;
//         this.upmess = ''
      

//         this.baseweb = 'http://localhost:1337/'// /api/'
//      //   http://localhost:1337/bakery


//     }
//     // getbakery() {
//     //     var url = baseweb + 'bakery'
//     //     return this.http.fetch(url, {
//     //         mode: 'cors'
//     //     }).then((res) => res.json())
//     // }

// }