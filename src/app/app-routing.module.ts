import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioUserComponent } from './usuario-app/inicio-user/inicio-user.component';
import { NotasUsuarioComponent } from './usuario-app/notas-usuario/notas-usuario.component';
import { PerfilUsuarioComponent } from './usuario-app/perfil-usuario/perfil-usuario.component';
const routes: Routes = [
  {path:'register',component: RegisterComponent },
  {path:'home-user', component: InicioUserComponent,
        children:[
              {path:'notas-user', component:NotasUsuarioComponent,canActivate:[AuthGuard]},
              {path:'perfil-user', component:PerfilUsuarioComponent,canActivate:[AuthGuard]}
  ]},
  
  {path:'', component: LoginComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
