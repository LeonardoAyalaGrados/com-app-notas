import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  datosUsuario:any=this.usuarioService.getUser();
  constructor(public usuarioService:UsuarioServiceService){
  }
  ngOnInit(): void {
    console.log(this.datosUsuario);
  }

}
