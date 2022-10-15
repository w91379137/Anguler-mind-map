import { MindMapItem, MindMap } from "../mind-map-item";
import { htmlList } from "./html_skill";
import { tsList } from './ts_skill';
import { rxjsList } from './rxjs_skill';


export function angulerList(): MindMap {

  let root = new MindMapItem({title: 'anguler'})

  let result = new MindMap(root)
  result.connect(htmlList())
  result.connect(tsList())
  result.connect(rxjsList())

  return result
}
