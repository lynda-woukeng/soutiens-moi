import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SESSIONS, Session } from '../session-data';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-session-list',
  standalone: true,
  imports: [CommonModule, RouterModule,IonicModule],
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent {
  sessions: Session[] = [...SESSIONS];

  supprimer(id: number) {
    this.sessions = this.sessions.filter(s => s.id !== id);
  }
}
