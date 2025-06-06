import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

interface Response {
  id: number;
  author: string;
  content: string;
  votes: number;
}

@Component({
  selector: 'app-faq-response',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,IonicModule],
  templateUrl: './faq-response.component.html',
    styleUrl: './faq-response.component.scss'

})
export class FaqResponseComponent {
  responses: Response[] = [
    { id: 1, author: 'Alice', content: 'Voici une réponse.', votes: 3 },
    { id: 2, author: 'Bob', content: 'Une autre réponse ici.', votes: 1 }
  ];

  newResponse: string = '';

  voteUp(id: number) {
    const resp = this.responses.find(r => r.id === id);
    if (resp) {
      resp.votes++;
    }
  }

  submitResponse() {
    if (this.newResponse.trim()) {
      this.responses.push({
        id: this.responses.length + 1,
        author: 'Moi',
        content: this.newResponse.trim(),
        votes: 0
      });
      this.newResponse = '';
    }
  }
}
