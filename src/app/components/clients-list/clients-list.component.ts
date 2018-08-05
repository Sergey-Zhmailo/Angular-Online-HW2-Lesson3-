import { Component, OnInit } from '@angular/core';
import { ClientData } from "../models/Client";
import { FormGroup } from "@angular/forms";
import {ShoppingListItem} from "../models/ShoppingListItem";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  client: ClientData = {
    name: '',
    email: '',
    telNumber: '',
    comments: ''
  };
  clientsList: ClientData[];
  constructor() { }

  ngOnInit() {
    this.clientsList = [
      {
        id: 1,
        name: 'Ivan',
        email: 'qwerty@mail.com',
        age: 20,
        telNumber: '+38(099)999-99-99',
        comments: 'test'
      }
    ];
  }

  onSubmit(form) {
    if (form.invalid) return;

    const newClient: ClientData = {
      id: this.clientsList.length + 1,
      name: this.client.name,
      email: this.client.email,
      age: this.client.age,
      telNumber: this.client.telNumber,
      comments: this.client.comments
    };

    this.clientsList.push(newClient);

    form.reset();
  }

  deleteClient(id) {
    console.log(id + 1);
    this.clientsList.splice(id, 1);
  }

}
