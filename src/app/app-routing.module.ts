import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/login']);

// Automatically log in users
const redirectLogged= () => redirectLoggedInTo(['/home']);

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLogged),
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule),
  },
  {
    path: 'profile',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'my-calendar',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./my-calendar/my-calendar.module').then( m => m.MyCalendarPageModule)
  },
  {
    path: 'reserve',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./reserve/reserve.module').then( m => m.ReservePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'verify-email',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'player/:id',
    loadChildren: () => import('./player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'sokker-login',
    loadChildren: () => import('./sokker-login/sokker-login.module').then( m => m.SokkerLoginPageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./players/players.module').then( m => m.PlayersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
