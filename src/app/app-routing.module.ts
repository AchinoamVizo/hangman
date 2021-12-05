import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './Guard/auth-guard.service';
import { UnauthGuardService } from './Guard/unauth-guard.service';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./game/game.module').then(m => m.GameModule), canActivateChild: [AuthGuardService] },
  { path: 'login', loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule), canActivateChild: [UnauthGuardService] },
  { path: 'scoreboard', loadChildren: () => import('./scoreboard/scoreboard.module').then(m => m.ScoreboardModule) },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
