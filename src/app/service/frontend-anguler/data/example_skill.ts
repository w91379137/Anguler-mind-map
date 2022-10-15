import { MindMapItem, MindMap } from "../mind-map-item";

export function exampleList(): MindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'example 範例'})
  itemList.push(parent)
  { // 一點
    let child = new MindMapItem({title: '顏色選擇'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
  }

  return new MindMap(parent, itemList)
}
