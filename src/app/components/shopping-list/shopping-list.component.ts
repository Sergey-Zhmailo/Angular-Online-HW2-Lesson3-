import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingListItem } from "../models/ShoppingListItem";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  item: ShoppingListItem = {
    name: '',
    count: 1
  };
  shoppingList: ShoppingListItem[];
  @ViewChild('form') form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.shoppingList = [
      {
        id: 0,
        name: 'apple',
        count: 2
      },
      {
        id: 1,
        name: 'cherry',
        count: 3
      }
    ];
  }

  onSubmit(form) {
    const newItem: ShoppingListItem = {
      name: this.item.name,
      count: this.item.count,
      id: this.shoppingList.length
    };

    this.shoppingList.push(newItem);

    // this.item.name = '';
    // this.item.count = 1;
    // console.log(e);
    // e.target.reset();
    // console.log(form);
    // form.reset();

  }

}
