import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { Workshop } from '../workshop';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private workshops:Workshop[] = [];
  private saved:boolean = false;

  private participant: Participant=new Participant();

  constructor(private restService:RestClientService) { 
  }

  ngOnInit() {
    this.getWorkshops();
  }

  get model():string {
    return JSON.stringify(this.participant);
  }

  getWorkshops() {
    this.restService.getWorkshops().subscribe(w => {
      this.workshops = w;
      this.participant.workshop = this.workshops[0];
    });
  }

  formSubmit() {
    this.restService.sendNewParticipant(this.participant)
     .subscribe(participant => {
        this.saved = true;
        setTimeout(_=> this.saved = false, 5000);
     });
  }
}
