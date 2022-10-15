import { MindMapItem } from "../mind-map-item";

export function htmlList(): MindMapItem[] {
  let result: MindMapItem[] = [];
  {
    let parent = new MindMapItem({title: 'html'})
    result.push(parent)
    {
      let child = new MindMapItem({title: 'ngClass'})
      child.parentId = parent.id
      child.isChecked = true
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'ngStyle'})
      child.parentId = parent.id
      child.isChecked = true
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'ngFor'})
      child.parentId = parent.id
      child.isChecked = true
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'ngIf'})
      child.parentId = parent.id
      child.isChecked = true
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'ng-container'})
      child.parentId = parent.id
      child.isChecked = true
      result.push(child)
    }
  }

  return result
}
