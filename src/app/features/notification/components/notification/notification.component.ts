import { Component } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-notification',
  standalone:true,
  imports: [NgIf], 
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  visible = true;
  message = 'nouveau message';

  close() {
    this.visible = false;
  }
}
