import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-faq-post',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    IonicModule
  ],
  templateUrl: './faq-post.component.html',
  styleUrl: './faq-post.component.scss'
})
export class FaqPostComponent {
  title = '';
  content = '';

  submit() {
    console.log('Question postée :', this.title, this.content);
  }
}
