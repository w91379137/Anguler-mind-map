import { Component, OnInit } from '@angular/core';
import { FrontendAngulerService } from 'src/app/service/frontend-anguler/frontend-anguler.service';
import { MindMapItem } from 'src/app/service/frontend-anguler/mind-map-item';
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
    this.allMap()
  }

  ngOnInit(): void { }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
  // setup
  allMap() {
    this.viewModel.itemList = this.frontendAnguler.model.itemList
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
  // present
  get markdown() {
    let item = this.viewModel.itemList[0]
    let result = item.markdown
    return result
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
  // action
  onResetClicked() {
    this.allMap()
  }

  onTitleClicked(item: MindMapItem) {
    let map = this.frontendAnguler.model.map.sub(item.id)
    if (map) {
      this.viewModel.itemList = map.itemList
    }
  }
}
