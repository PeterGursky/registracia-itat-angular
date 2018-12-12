import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workshop } from './workshop';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  private urlPar = 'http://localhost:8080/participants';
  private urlWor = 'http://localhost:8080/workshops';

  constructor(private http:HttpClient) { }

  public getParicipants():Observable<Participant[]> {
    return this.http.get<Participant[]>(this.urlPar);
  }

  public getWorkshops():Observable<Workshop[]> {
    return this.http.get<Workshop[]>(this.urlWor);
  }

  public sendNewParticipant(participant:Participant):Observable<Participant> {
    return this.http.post<Participant>(this.urlPar, participant);
  }
}
