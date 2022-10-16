import { MindMapItem, MindMap } from "../mind-map-item";

export function htmlList(): MindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'html'})
  itemList.push(parent)

  let result = new MindMap(parent, itemList)
  {
    let child = new MindMapItem({title: 'ngClass'})
    child.isChecked = true
    result.add(child)
  }
  {
    let child = new MindMapItem({title: 'ngStyle'})
    child.isChecked = true
    result.add(child)
  }
  {
    let child = new MindMapItem({title: 'ngFor'})
    child.isChecked = true
    result.add(child)
  }
  {
    let child = new MindMapItem({title: 'ngIf'})
    child.isChecked = true
    result.add(child)
  }
  {
    let child = new MindMapItem({title: 'ng-container'})
    child.isChecked = true
    result.add(child)
  }
  {
    let child = new MindMapItem({title: 'ngTemplate'})
    child.isChecked = true
    result.add(child)
  }

  return result
}
