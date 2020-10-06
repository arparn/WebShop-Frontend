import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import {Item} from '../items/item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items.slice(1, 5));
  }
}