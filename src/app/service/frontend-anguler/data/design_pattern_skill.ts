
import { MindMapItem, MindMap } from "../mind-map-item";

export function DesignPatternList(): MindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'DesignPattern 設計模式'})
  itemList.push(parent)
  { // 一點
    let child = new MindMapItem({title: '工廠模式'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
  }

  return new MindMap(parent, itemList)
}

