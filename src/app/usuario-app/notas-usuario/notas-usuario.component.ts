import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotasServiceService } from 'src/app/services/notas-service.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { ModalRegistrarNotaComponent } from './modal-registrar-nota/modal-registrar-nota.component';

@Component({
  selector: 'app-notas-usuario',
  templateUrl: './notas-usuario.component.html',
  styleUrls: ['./notas-usuario.component.css']
})
export class NotasUsuarioComponent implements OnInit,OnDestroy{
  longText:string="Contenido de prueba, creand card";
  suscripcion:Subscription;
  // correo:any="leoayala@gmail.com";
  //  correo:any=this.usuarioService.getUser().email;

  notas:any=[];
  constructor(public usuarioService:UsuarioServiceService,private notasService:NotasServiceService,public dialogo: MatDialog, private snackBar:MatSnackBar){
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
  ngOnInit(): void {
     this.listarNotasUser();
    this.suscripcion=this.usuarioService.refresh$.subscribe(()=>{
      this.listarNotasUser();

    });
  }

  listarNotasUser(){
    this.usuarioService.findUserForEmail(this.usuarioService.getUser().email).subscribe(
      (data)=>{
        // console.log(this.correo);
        this.notas=data.notas;
        console.log(this.notas);
      },(error)=>{
        console.log(error);
      }
    );
  }

  eliminarNota(id:any){
    console.log(id);
    this.notasService.deleteNotaPorId(id).subscribe(
      (data)=>{
        console.log(data);
        this.listarNotasUser();
      },(error)=>{
        console.log(error);
      }
    );

  }

  mostrarDialogo(): void {
    this.dialogo
      .open(ModalRegistrarNotaComponent, {
        // data: `¿Te gusta programar en TypeScript?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.listarNotasUser();
          // this.snackBar.open("Usuario agregado","exito",{
          //   duration:4000,
          //   verticalPosition:"top"
          //   });
        }
        
      });
  }
}
