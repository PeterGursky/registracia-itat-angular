import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  private participants: Participant[] = [];
  private selected:Participant;

  constructor(private restService: RestClientService) { }

  ngOnInit() {
    this.restService.getParicipants()
    .subscribe(p => this.participants = p);
  }

  selectParticipant(participant: Participant) : void {
    this.selected = participant;
  }
}
