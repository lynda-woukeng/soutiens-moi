import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss'

})
export class ChatComponent {
  messages: string[] = ['Bienvenue dans le chat'];
  newMessage: string = '';

  envoyer() {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage.trim());
      this.newMessage = '';
    }
  }
}
