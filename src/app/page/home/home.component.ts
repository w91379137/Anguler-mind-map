import { Component, OnInit } from '@angular/core';
import { FrontendAngulerService } from 'src/app/service/frontend-anguler/frontend-anguler.service';
import { HomeViewModel } from './home.viewmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  viewModel = new HomeViewModel()

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor(
    private frontendAnguler: FrontendAngulerService
  ) {
    this.viewModel.itemList = frontendAnguler.model.items
  }

  ngOnInit(): void { }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

}
