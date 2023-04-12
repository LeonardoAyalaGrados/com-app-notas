import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-inicio-user',
  templateUrl: './inicio-user.component.html',
  styleUrls: ['./inicio-user.component.css']
})
export class InicioUserComponent implements OnInit{
  

  constructor(public usuarioService:UsuarioServiceService){

  }
  // ngOnDestroy(): void {
  //  this.subscriptionUsuario?.unsubscribe();
  //  console.log("subscripcion destruida");
  // }
  ngOnInit(): void {  
    // this.subscriptionUsuario=this.getUsuarios();
    
  }

  // getUsuarios():any{
  //   this.usuarioService.getUsuariosAll().subscribe(
  //     (data)=>{
  //       this.usuarios=data;
  //       console.log(data);
  //     },
  //     (error)=>{
  //       console.log(error);
  //     }

  //   )
  // }
}
