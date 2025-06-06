import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,IonicModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  roleDescription: string = '';
  profileImage: string | ArrayBuffer | null = null;

  constructor(private router: Router) {}

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Description:', this.roleDescription);
      console.log('Image:', this.profileImage);
      this.router.navigate(['/welcome']);  // Navigue vers la page bienvenue
    } else {
      alert('Please fill in all required fields.');
    }
  }

  triggerFileInput(): void {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
