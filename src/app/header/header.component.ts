import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  linkSelected;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  selectedMenu (lien)  {
    this.menuService.linkSelected = lien;
  }

  getLinkSelected() {
    return this.menuService.linkSelected;
  }

  getListeLink () {
    return this.menuService.listLinks;
  }
}
