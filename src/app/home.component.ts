import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule, ],
  template: `
    <div class="container">
      <h1>🎓 Bienvenue sur <span class="title">Soutiens-moi !</span></h1>
      <p>Plateforme d'entraide entre étudiants en informatique 👩‍💻👨‍💻</p>

      <div class="grid">
        <a routerLink="/auth/login" class="card">🔑 Connexion</a>
        <a routerLink="/auth/register" class="card">🆕 Inscription</a>
        <a routerLink="/user/profile" class="card">👤 Mon Profil</a>
        <a routerLink="/user/skill-list" class="card">🛠️ Compétences</a>
        <a routerLink="/sessions" class="card">📅 Séances</a>
        <a routerLink="/sessions/create" class="card">➕ Créer une séance</a>
        <a routerLink="/faq" class="card">📚 FAQ</a>
        <a routerLink="/faq/post" class="card">📝 Poser une Question</a>
        <a routerLink="/messages" class="card">💬 Messages</a>
        <a routerLink="/payments" class="card">💰 Paiement</a>
        <a routerLink="/feedback" class="card">⭐ Donner un Avis</a>
        <a routerLink="/notification" class="card">🔔 Notifications</a>
        <a routerLink="/dashboard" class="card">📊 Admin Dashboard</a>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 2rem;
      text-align: center;
    }

    h1 {
      font-size: 2.2rem;
      color: #3f51b5;
      margin-bottom: 0.5em;
    }

    .title {
      font-weight: bold;
      color: #1a237e;
    }

    p {
      color: #555;
      margin-bottom: 2em;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .card {
      background: #f5f5f5;
      padding: 1.2rem;
      border-radius: 10px;
      text-decoration: none;
      color: #333;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
    }

    .card:hover {
      background: #e3f2fd;
      transform: translateY(-3px);
      color: #0d47a1;
    }

    @media (max-width: 600px) {
      .card {
        font-size: 1rem;
        padding: 1rem;
      }
    }
  `]
})
export class HomeComponent {}
