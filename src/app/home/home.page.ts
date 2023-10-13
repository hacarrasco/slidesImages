import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentImageUrl!: string;
  loading: boolean = false;
  showSpinner = true;
  showButton = true;

  constructor(private navCtrl: NavController, private http: HttpClient) {}

  loadAndShowImages() {
    this.loading = true;

    // Llama a la API de Rick and Morty para obtener imágenes
    this.http
      .get<any>('https://rickandmortyapi.com/api/character/')
      .subscribe((response) => {
        const images = response.results.map(
          (character: { image: any }) => character.image
        );

        // Muestra la primera imagen
        this.currentImageUrl = images[0];
        this.showSpinner = false;
        this.showButton = false;
        // Cambia la imagen cada 5 segundos (5000 ms)
        let index = 1;
        const interval = setInterval(() => {
          if (index < images.length) {
            this.currentImageUrl = images[index];
            index++;
          } else {
            clearInterval(interval);
            this.loading = false;
            this.navCtrl.navigateForward('/end-slider')
          }
        }, 1000);
      });
    this.loading = false;
  }
}
