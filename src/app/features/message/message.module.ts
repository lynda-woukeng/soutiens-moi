import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  
  imports: [
    ChatComponent,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ChatComponent }])
  ]
})
export class MessageModule {}
