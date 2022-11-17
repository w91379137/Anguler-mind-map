import { Component, OnInit } from '@angular/core';
import { FrontendAngulerService } from 'src/app/service/frontend-anguler/frontend-anguler.service';
import { MindMapItem } from 'src/app/service/frontend-anguler/mind-map-item';
import { TreeMapViewModel } from './tree-map.viewmodel';

@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.scss']
})
export class TreeMapComponent implements OnInit {

  viewModel = new TreeMapViewModel()

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

  onParentClicked() {
    // this.allMap()
    let item = this.viewModel.itemList[0]
    let parentId = item.parentId
    if (parentId) {
      let map = this.frontendAnguler.model.map.sub(parentId)
      if (map) {
        this.viewModel.itemList = map.itemList
      }
    }
  }

  onTitleClicked(item: MindMapItem) {
    let map = this.frontendAnguler.model.map.sub(item.id)
    if (map) {
      this.viewModel.itemList = map.itemList
    }
  }
}
