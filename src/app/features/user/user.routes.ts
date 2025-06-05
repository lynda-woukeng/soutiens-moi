import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { AvatarUploadComponent } from './avatar-upload/avatar-upload.component';

export const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'skills', component: SkillListComponent },
  { path: 'avatar', component: AvatarUploadComponent }
];
