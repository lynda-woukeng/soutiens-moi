import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-session-create',
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule],
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.scss']
})
export class SessionCreateComponent {
  session = {
    sujet: '',
    date: '',
    mode: ''
  };

  creer(form?: NgForm) {
    if (!form || !form.valid) {
      console.warn('Formulaire invalide. Veuillez remplir tous les champs.');
      return;
    }

    console.log('Séance créée avec succès :', this.session);

    form.resetForm();
  }
}
