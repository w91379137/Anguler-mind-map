

import { htmlList } from "./data/html_skill";
import { rxjsList } from "./data/rxjs_skill";
import { tsList } from "./data/ts_skill";
import { workflow } from "./data/workflow_skill";
import { MindMapItem } from "./mind-map-item";

export class FrontendAngulerModel {

  items: MindMapItem[] = getItems()

}

export function getItems(): MindMapItem[] {

  let result: MindMapItem[] = [];

  result = result.concat(htmlList().list)
  result = result.concat(tsList().list)
  result = result.concat(rxjsList().list)
  result = result.concat(workflow().list)

  return result;
}
