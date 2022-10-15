import { MindMapItem, PartialMindMap } from "../mind-map-item";

export function workflow(): PartialMindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'workflow'})
  itemList.push(parent)
  {
    let child = new MindMapItem({title: 'mvvm'})
    child.parentId = parent.id
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'binder'})
    child.parentId = parent.id
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'viewmodel'})
    child.parentId = parent.id
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'action'})
    child.parentId = parent.id
    itemList.push(child)
  }

  return {
    root: parent,
    list: itemList
  }
}
