import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { Workshop } from '../workshop';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private workshops:Workshop[] = [
    new Workshop(1, "prvy", new Date('2019-09-17'), new Date('2019-09-19'),250,200,280,230),
    new Workshop(2, "druhy", new Date('2019-09-18'), new Date('2019-09-20'),250,200,280,230)
  ];

  private participant: Participant=new Participant();

  constructor() { 
  }

  ngOnInit() {
    this.participant.workshop = this.workshops[0];
  }

  get model():string {
    return JSON.stringify(this.participant);
  }

}
