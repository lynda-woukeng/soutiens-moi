import { Component } from '@angular/core';
import { NgFor} from '@angular/common';


interface Question {
  id: number;
  title: string;
  content: string;
  votes: number;
}

@Component({
  selector: 'app-faq-list',
  standalone: true,
  imports: [NgFor], 
  template: `
    <div *ngFor="let question of questions" style="margin-bottom: 16px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
      <h3>{{ question.title }}</h3>
      <p>{{ question.content }}</p>
      <button (click)="vote(question.id)">👍{{ question.votes }}</button>
    </div>
  `
})
export class FaqListComponent {
  questions: Question[] = [
    { id: 1, title: 'As tu besoin d aide ?', content: ' nous vous invitons a laisser un pouce our toute preocupation ou besoin d aide.', votes: 0 },
  ];

  vote(id: number) {
    const q = this.questions.find(question => question.id === id);
    if (q) {
      q.votes++;
    }
  }
}
