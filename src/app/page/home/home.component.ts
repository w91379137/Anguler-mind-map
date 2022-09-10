import { Component, OnInit } from '@angular/core';
import { getItems, HomeViewModel } from './home.viewmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  viewModel = new HomeViewModel()

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() {
    this.viewModel.itemList = getItems()
  }

  ngOnInit(): void {
    
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

}
