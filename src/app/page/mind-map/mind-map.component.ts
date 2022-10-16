import { Component, OnInit } from '@angular/core';
import { FrontendAngulerService } from 'src/app/service/frontend-anguler/frontend-anguler.service';
import { MindMapItemViewModel, MindMapViewModel } from './mind-map.viewmodel';

@Component({
  selector: 'app-mind-map',
  templateUrl: './mind-map.component.html',
  styleUrls: ['./mind-map.component.scss']
})
export class MindMapComponent implements OnInit {

  public viewModel = new MindMapViewModel()

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
    this.viewModel.itemVMList = this.frontendAnguler.model.itemList.map(item => new MindMapItemViewModel(item))
    this.viewModel.updatePosition(this.frontendAnguler.model.map.root.id)
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

}
