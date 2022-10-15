import { MindMapItem, PartialMindMap } from "../mind-map-item";

export function tsList(): PartialMindMap {
  // https://angular.io/cli/generate
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'ts'})
  itemList.push(parent)
  {
    let child = new MindMapItem({title: 'component'})
    child.parentId = parent.id
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'directive'})
    child.parentId = parent.id
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'pipe'})
    child.parentId = parent.id
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'service'})
    child.parentId = parent.id
    itemList.push(child)
  }

  return {
    root: parent,
    list: itemList
  }
}
