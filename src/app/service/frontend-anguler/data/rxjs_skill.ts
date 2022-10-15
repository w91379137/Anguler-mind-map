import { MindMapItem, PartialMindMap } from "../mind-map-item";

export function rxjsList(): PartialMindMap {
  // https://rxjs.dev/api
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'rxjs'})
  itemList.push(parent)
  {
    let child = new MindMapItem({title: 'debounceTime'})
    child.parentId = parent.id
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'pipe'})
    child.parentId = parent.id
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'map'})
    child.parentId = parent.id
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'merge'})
    child.parentId = parent.id
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'filter'})
    child.parentId = parent.id
    itemList.push(child)
  }

  return {
    root: parent,
    list: itemList
  }
}
