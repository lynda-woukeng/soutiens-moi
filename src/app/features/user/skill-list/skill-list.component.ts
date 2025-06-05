import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent {
  skills: string[] = [];
  newSkill: string = '';

  ajouterCompetence() {
    const skill = this.newSkill.trim();
    if (skill) {
      this.skills.push(skill);
      this.newSkill = '';
    }
  }
}
