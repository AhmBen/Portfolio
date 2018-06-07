import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  linkSelected = null;

  constructor() {
    this.linkSelected = this.listLinks[0]; // Initialisation
  }

  listLinks = [
    {
      name: 'Home',
      id: 'home',
      url: '#',
      position: 'header',
      contenu: 'Contenu'
    },
    {
      name: 'Réalisations',
      id: 'realisations',
      url: '#',
      position: 'header',
      contenu: 'Contenu'
    },
    {
      name: 'FAQ',
      id: 'faq',
      url: '#',
      position: 'header',
      contenu: 'Contenu'
    },
    {
      name: 'Contact',
      id: 'contact',
      url: '#',
      position: 'footer',
      contenu: 'Contenu'
    },
    {
      name: 'A Propos',
      id: 'aPropos',
      url: '#',
      position: 'footer',
      contenu: 'Contenu'
    },
    {
      name: 'Mentions Légales',
      id: 'mentions',
      url: '#',
      position: 'footer',
      contenu: 'Contenu'
    }
  ];

}
