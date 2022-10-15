
import { MindMapItem, PartialMindMap } from "../mind-map-item";

export function gitList(): PartialMindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'git'})
  itemList.push(parent)
  {
    let child = new MindMapItem({title: 'commit'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'push'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'pull'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'rebase'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'rebase -i'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
  }

  return {
    root: parent,
    list: itemList
  }
}
