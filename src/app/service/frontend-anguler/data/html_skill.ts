import { MindMapItem, MindMap } from "../mind-map-item";

export function htmlList(): MindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'html', markdown: '/assets/md/html.md'})
  parent.isChecked = true
  itemList.push(parent)

  let result = new MindMap(parent, itemList)
  {
    let child = new MindMapItem({title: 'ngClass', markdown: '/assets/md/ngClass.md'})
    child.isChecked = true
    result.add(child)
  }
  {
    let child = new MindMapItem({title: 'ngStyle', markdown: '/assets/md/ngStyle.md'})
    child.isChecked = true
    result.add(child)
  }
  {
    let child = new MindMapItem({title: 'ngFor', markdown: '/assets/md/html.md'})
    child.isChecked = true
    result.add(child)
  }
  {
    let child = new MindMapItem({title: 'ngIf', markdown: '/assets/md/ngIf.md'})
    child.isChecked = true
    result.add(child)
  }
  {
    let child = new MindMapItem({title: 'ng-container', markdown: '/assets/md/ngContainer.md'})
    child.isChecked = true
    result.add(child)
  }
  {
    let child = new MindMapItem({title: 'ngTemplate', markdown: '/assets/md/ngTemplate.md'})
    child.isChecked = true
    result.add(child)
  }

  return result
}
