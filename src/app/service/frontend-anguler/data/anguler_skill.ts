import { MindMapItem, PartialMindMap } from "../mind-map-item";
import { htmlList } from "./html_skill";
import { tsList } from './ts_skill';
import { rxjsList } from './rxjs_skill';


export function angulerList(): PartialMindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'anguler'})
  itemList.push(parent)
  {
    let partial = htmlList()
    let child = partial.root
    child.parentId = parent.id
    itemList.push(...partial.list)
  }
  {
    let partial = tsList()
    let child = partial.root
    child.parentId = parent.id
    itemList.push(...partial.list)
  }
  {
    let partial = rxjsList()
    let child = partial.root
    child.parentId = parent.id
    itemList.push(...partial.list)
  }

  return {
    root: parent,
    list: itemList
  }
}
