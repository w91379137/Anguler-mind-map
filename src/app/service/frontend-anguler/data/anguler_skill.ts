import { MindMapItem, MindMap } from "../mind-map-item";
import { htmlList } from "./html_skill";
import { tsList } from './ts_skill';
import { rxjsList } from './rxjs_skill';


export function angulerList(): MindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'anguler'})
  itemList.push(parent)

  let result = new MindMap(parent, itemList)
  result.connect(htmlList())
  result.connect(tsList())
  result.connect(rxjsList())

  return result
}
