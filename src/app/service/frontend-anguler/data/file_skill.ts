import { MindMapItem, MindMap } from "../mind-map-item";

export function fileList(): MindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: '檔案內容'})
  itemList.push(parent)

  let result = new MindMap(parent, itemList)

  {
    let child = new MindMapItem({title: 'constructor'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'ngOnInit'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'ngOnDestroy'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'setup'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'present'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'action'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  return result
}
