import { Routes } from '@angular/router';

export const routes: Routes = [
  {
  path: 'auth',
  children: [
    {
      path: 'login',
      loadComponent: () =>
        import('./auth/login/login.component').then(m => m.LoginComponent)
    },
    {
      path: 'register',
      loadComponent: () =>
        import('./auth/register/register.component').then(m => m.RegisterComponent)
    }
  ]
},
  
 {
  path: 'payments',
  loadComponent: () =>
    import('./features/payment/wallet/wallet.component').then(m => m.WalletComponent)
},
  {
    path: 'feedback',
    loadChildren: () => import('./features/feedback/feedback.module').then(m => m.FeedbackModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./features/message/message.module').then(m => m.MessageModule)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'notification',
    loadComponent: () => import('./features/notification/components/notification/notification.component').then(m => m.NotificationComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./features/faq/components/faq-list/faq-list.component').then(m => m.FaqListComponent)
  },
  {
    path: 'faq/post',
    loadComponent: () => import('./features/faq/components/faq-post/faq-post.component').then(m => m.FaqPostComponent)
  },
  {
  path: 'home',
  loadComponent: () =>
    import('./home.component').then(m => m.HomeComponent)
},
{
  path: 'sessions',
  children: [
    {
      path: '',
      loadComponent: () =>
        import('./features/session/components/session-list.component').then(m => m.SessionListComponent)
    },
    {
      path: 'create',
      loadComponent: () =>
        import('./features/session/components/session-create.component').then(m => m.SessionCreateComponent)
    }
  ]
},
{
  path: 'user',
  children: [
    {
      path: 'profile',
      loadComponent: () =>
        import('./features/user/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
      path: 'skill-list',
      loadComponent: () =>
        import('./features/user/skill-list/skill-list.component').then(m => m.SkillListComponent)
    }
  ]
},

{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},

 
];
