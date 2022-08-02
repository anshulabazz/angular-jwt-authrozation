import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ValidformComponent } from './validform/validform.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'board-admin', component: BoardAdminComponent },
  { path: 'board-user', component: BoardUserComponent },
  { path: 'board-mod', component: BoardModeratorComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'form', component: ValidformComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
