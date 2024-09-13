import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  profileImages: string[] = ['assets/avatarm.jpeg', 'assets/avatarh.jpeg'];
  currentImageIndex: number = 0;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  navigateToInicio() {
    this.navCtrl.navigateForward('/inicio');
  }

  navigateToProfile() {
    this.navCtrl.navigateForward('/perfil');
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.profileImages.length) % this.profileImages.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.profileImages.length;
  }

  guardarPerfil() {
    console.log('Perfil guardado:', this.nombre, this.apellido, this.email);
  }

  get profileImage() {
    return this.profileImages[this.currentImageIndex];
  }
}
