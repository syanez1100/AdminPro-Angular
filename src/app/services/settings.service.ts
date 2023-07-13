import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public linkTheme = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href',url);

  }

  cambiarTema(tema: string){

    const url = `./assets/css/colors/${tema}.css`;
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('theme',url);
  }

  seleccionarTema(){

    const links: NodeListOf<Element> = document.querySelectorAll('.selector');

    links.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');
      if(btnThemeUrl === currentTheme){
        elem.classList.add('working');
      }
    });
  }
}
