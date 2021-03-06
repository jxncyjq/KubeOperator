import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemCreateComponent} from './item-create/item-create.component';
import {ItemListComponent} from './item-list/item-list.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @ViewChild(ItemCreateComponent, {static: true})
  creationItem: ItemCreateComponent;

  @ViewChild(ItemListComponent, {static: true})
  listItem: ItemListComponent;

  constructor() {
  }

  ngOnInit() {
  }

  openModal(): void {
    this.creationItem.newItem();
  }

  createItem(created: boolean) {
    if (created) {
      this.listItem.listItem();
    }
  }
}
