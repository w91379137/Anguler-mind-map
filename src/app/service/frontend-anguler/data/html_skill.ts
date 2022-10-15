import { MindMapItem, PartialMindMap } from "../mind-map-item";

export function htmlList(): PartialMindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'html'})
  itemList.push(parent)
  {
    let child = new MindMapItem({title: 'ngClass'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'ngStyle'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'ngFor'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'ngIf'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'ng-container'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }

  return {
    root: parent,
    list: itemList
  }
}
