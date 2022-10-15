

import { WorkflowList } from "./data/workflow_skill";
import { MindMapItem } from "./mind-map-item";
import { gitList } from './data/git_skill';
import { angulerList } from "./data/anguler_skill";
import { classList } from "./data/class_skill";
import { exampleList } from "./data/example_skill";
import { DesignPatternList } from "./data/design_pattern_skill";
import { DocList } from "./data/doc_skill";

export class FrontendAngulerModel {

  items: MindMapItem[] = getItems()

}

export function getItems(): MindMapItem[] {

  let result: MindMapItem[] = [];

  // 技巧
  result = result.concat(gitList().itemList)
  result = result.concat(angulerList().itemList)
  result = result.concat(WorkflowList().itemList)
  result = result.concat(DesignPatternList().itemList)
  result = result.concat(DocList().itemList)

  // 課程
  result = result.concat(classList().itemList)
  result = result.concat(exampleList().itemList)

  return result;
}
