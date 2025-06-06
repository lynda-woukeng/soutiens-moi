import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule,IonicModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
  return this.loginForm.get('email');
}

get password() {
  return this.loginForm.get('password');
}

onSubmit() {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched(); 
    return;
  }

  console.log('Connexion réussie avec :', this.loginForm.value);
}


  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
