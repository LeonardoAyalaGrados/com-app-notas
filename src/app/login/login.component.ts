import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioServiceService } from '../services/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  hide :boolean=true;
  myForm:FormGroup;
  userData:any;

  ngOnInit(): void {

  }

  constructor(private fb:FormBuilder, private usuarioService:UsuarioServiceService, private router:Router, private snackBar: MatSnackBar){
      this.myForm=this.fb.group({
        email:['',[Validators.required, Validators.email]],
        password:['',Validators.required]
      });
  }

  iniciarSesion():any{
    const val=this.myForm.value;
    this.usuarioService.login(val.email,val.password).subscribe(
      (data)=>{
        console.log(this.myForm.value);
        
        this.router.navigate(["home-user/notas-user"]);
        this.usuarioService.findUserForEmail(this.myForm.value.email).subscribe(
          (data:any)=>{
            this.userData=data;
            console.log(data);
            this.usuarioService.setUser(this.userData);
          },(error:any)=>{
            console.log(error);
          }
          );

      },(error)=>{
          console.log(this.myForm.value);
          console.log(error);
          this.snackBar.open("credenciales incorrectas","Listo",{
            duration:4000,            
            verticalPosition:"top"
          });
          this.router.navigate([""]);
      }
    );
  }

  

 


}
