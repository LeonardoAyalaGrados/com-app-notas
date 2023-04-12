import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { InicioUserComponent } from './usuario-app/inicio-user/inicio-user.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { NotasUsuarioComponent } from './usuario-app/notas-usuario/notas-usuario.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PerfilUsuarioComponent } from './usuario-app/perfil-usuario/perfil-usuario.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthInterceptor } from './helpers/auth.interceptor';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalRegistrarNotaComponent } from './usuario-app/notas-usuario/modal-registrar-nota/modal-registrar-nota.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    InicioUserComponent,
    NotasUsuarioComponent,
    PerfilUsuarioComponent,
    ModalRegistrarNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule
    
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
