import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServiceService } from '../services/usuario-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(public userService:UsuarioServiceService,private router:Router){

  }

  logout(){
    this.userService.cerrarSesion();
    this.router.navigate(['']);
  }
}
