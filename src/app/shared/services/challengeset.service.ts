import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import ChallengeSetObject = ChallengeSetModule.ChallengeSetObject;



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ChallengesetService {

  constructor(private http: HttpClient) { }

  getChallenges(url: string): Observable<ChallengeSetObject>{
    return this.http.get<ChallengeSetObject>(url);
  }
}
