
// suplente

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      usuario: ['', Validators.required],  
      contrasena: ['', Validators.required]  
    });
  }

  async ingresar() {
    const f = this.formularioLogin.value;
    const usuarioPredeterminado = "gabriela";
    const contrasenaPredeterminada = "1234";

    if (f.usuario === usuarioPredeterminado && f.contrasena === contrasenaPredeterminada) {
      this.router.navigate(['/inicio']);
    } else {
      console.log("Usuario o contraseña incorrectos"); 
    }
  }
}

