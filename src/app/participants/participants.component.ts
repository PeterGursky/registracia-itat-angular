import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  private participants: Participant[] = [
    new Participant("Peter","Gurský","UPJŠ",8),
    new Participant("Alexander","Szabari","UPJŠ",1)
  ];
  private selected:Participant;

  constructor() { }

  ngOnInit() {
  }

  selectParticipant(participant: Participant) : void {
    this.selected = participant;
  }
}
