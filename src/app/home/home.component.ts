import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit
{
  public items: Array<any> = [];

  constructor()
  {
    this.items = [
      { name: 'assets/img/hs/hs-product-1.jpg' },
      { name: 'assets/img/hs/hs-product-2.jpg' },
      { name: 'assets/img/hs/hs-product-3.jpg' }
    ];
  }

  ngOnInit()
  {
  }

}
