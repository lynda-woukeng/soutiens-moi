import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,IonicModule],
  templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',

})
export class DashboardComponent {
  stats = {
    utilisateurs: 120,
    commentaires: 45
  };
}
