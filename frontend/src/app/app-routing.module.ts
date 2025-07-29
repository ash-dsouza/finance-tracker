import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddEntryComponent } from './pages/add-entry/add-entry.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'login', component: LoginComponent},
   {path: 'dashboard', component: DashboardComponent},
   {path: 'add-entry', component: AddEntryComponent},
   { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
