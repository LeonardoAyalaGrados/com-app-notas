import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotasServiceService } from 'src/app/services/notas-service.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-modal-registrar-nota',
  templateUrl: './modal-registrar-nota.component.html',
  styleUrls: ['./modal-registrar-nota.component.css']
})
export class ModalRegistrarNotaComponent {

  myForm:FormGroup;
  constructor(public dialogo: MatDialogRef<ModalRegistrarNotaComponent>,
          @Inject(MAT_DIALOG_DATA) public mensaje: string,private build:FormBuilder,
          private notaService:NotasServiceService, private snackBar:MatSnackBar,private userService:UsuarioServiceService){
          this.myForm=this.build.group({
            titulo:['',[Validators.required]],
            contenido:['',[Validators.required]],
            user:[{idPersona:this.userService.getUser().idPersona}]
          });
    }
    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
    // GUARDAR NOTA
    console.log(this.myForm.value);
      this.notaService.guardarNota(this.myForm.value).subscribe(
        (data)=>{
          console.log(data);
          this.snackBar.open("nota agregada","exito",{
            duration:4000,
            verticalPosition:"top"
          });
        },(error)=>{
          console.log(error);
          this.snackBar.open("algo ocurrio","error",{
            duration:4000,
            verticalPosition:"top"
          });
        }
      );


      this.dialogo.close(true);
    }
    agregarUsuario(){}
}
