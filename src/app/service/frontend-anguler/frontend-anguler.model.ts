

import { WorkflowList } from "./data/workflow_skill";
import { MindMapItem, MindMap } from './mind-map-item';
import { gitList } from './data/git_skill';
import { angulerList } from "./data/anguler_skill";
import { classList } from "./data/class_skill";
import { exampleList } from "./data/example_skill";
import { DesignPatternList } from "./data/design_pattern_skill";
import { DocList } from "./data/doc_skill";

export class FrontendAngulerModel {

  private map: MindMap

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() {
    let root = new MindMapItem({title: 'frontend_anguler'})
    this.map = new MindMap(root)
    { // 技巧
      this.map.connect(gitList())
      this.map.connect(angulerList())
      this.map.connect(WorkflowList())
      this.map.connect(DesignPatternList())
      this.map.connect(DocList())
    }
    { // 課程
      this.map.connect(classList())
      this.map.connect(exampleList())
    }
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  get items(): MindMapItem[] {
    return this.map.itemList
  }
}
