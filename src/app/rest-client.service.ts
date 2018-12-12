import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  private url = 'http://localhost:8080/participants';

  constructor(private http:HttpClient) { }

  public getParicipants():Observable<Participant[]> {
    return this.http.get<Participant[]>(this.url);
  }
}
