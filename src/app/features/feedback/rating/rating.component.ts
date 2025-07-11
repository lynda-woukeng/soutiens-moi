import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule],
  templateUrl: './rating.component.html',
  styleUrl:'./rating.component.scss'
    
  
})
export class RatingComponent {
  note = 0;
  commentaire = '';
  stars = Array(5).fill(0);

  setNote(n: number) {
    this.note = n;
  }

  envoyerFeedback() {
    alert(`Note : ${this.note} - Commentaire : ${this.commentaire}`);
  }
}
