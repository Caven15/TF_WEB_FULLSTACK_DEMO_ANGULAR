import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UtilisateurListComponent } from './components/utilisateur-list/utilisateur-list.component';
import { MonGuardTestGuard } from './services/guard/mon-guard-test.guard';
import { TestDirectiveCustomComponent } from './components/test-directive-custom/test-directive-custom.component';

const routes: Routes = [
  {path :'',pathMatch: 'full', redirectTo: 'home'},
  {path :'home', component : HomeComponent},
  {path :'demo-directive', component : TestDirectiveCustomComponent},
  {path :'liste-utilisateur', canActivate : [MonGuardTestGuard], component : UtilisateurListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
