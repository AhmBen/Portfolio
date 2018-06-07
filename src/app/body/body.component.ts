import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

   linkSelected;
   nameHeaderExist;

   constructor(public menuService: MenuService) {
   this.linkSelected = this.menuService.linkSelected;
   }

  ngOnInit() {
  }

  getLinkSelectedId() {
    return this.menuService.linkSelected.id;
  }

  getListeLink() {
    return this.menuService.listLinks;
  }
}
