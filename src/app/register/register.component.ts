import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioServiceService } from '../services/usuario-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide :boolean=true;
  myForm:FormGroup;
  constructor(private router: Router,private usuarioService:UsuarioServiceService,private fb:FormBuilder,private snackBar: MatSnackBar){
      this.myForm=this.fb.group({
        name:['',Validators.required],
        lastName:['',Validators.required],
        username:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        cel:['',[Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
        dni:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
        password:['',Validators.required],
      });
  }

  guardarUsuario(){
    console.log(this.myForm.value);
    this.usuarioService.createUsuario(this.myForm.value).subscribe(
      (data)=>{
        console.log(data);
        this.snackBar.open("usuario creado con exito"," listo",{
          duration:4000,
          verticalPosition:"top"
        });
    
        this.myForm.reset(this.myForm);
       setTimeout(()=>{ this.router.navigate([""])},4000);

      },(error)=>{
        alert("no se pudo crear el usuario");
        console.log(error);
      });
  }
}
