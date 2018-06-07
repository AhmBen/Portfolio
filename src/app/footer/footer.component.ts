import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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

  getListeLink() {
    return this.menuService.listLinks;
  }
}
