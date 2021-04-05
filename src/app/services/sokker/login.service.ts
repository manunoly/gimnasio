import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  sokkerURL = 'https://sokker.org/';
  urlSokkerLogin = `${this.sokkerURL}start.php?session=xml`;

  constructor(private http: HttpClientModule) {}

  login(user, pass){
    this.http.get('/api/items')
    .subscribe(data => {   // data is already a JSON object
        console.log(data['someProperty']);
    })
  }
}
