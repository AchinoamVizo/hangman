import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomWordService {

  constructor(private http: HttpClient) { }

  getWord(): Observable<any> {
    return this.http.get<string>("http://api.wordnik.com/v4/words.json/randomWord?api_key=c3847c4934574ce6cf81c45640103f2e5fab2284ab2e7badc")
  }
}
