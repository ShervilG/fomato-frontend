import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../models/ItemModel';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  itemList: Array<ItemModel> = [];
  nameFilter: string = "";

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getItemData("https://fakestoreapi.com/products", {}, {}).subscribe((data) => {
      this.itemList = data;     
    }, (error) => {
      console.log(`error occured : ` + error);
    });
  }

}
