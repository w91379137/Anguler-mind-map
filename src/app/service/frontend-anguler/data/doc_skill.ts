import { MindMapItem, MindMap } from "../mind-map-item";

export function DocList(): MindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'doc 文件'})
  itemList.push(parent)
  { // 一點
    let child = new MindMapItem({title: 'markdown 格式'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
  }

  return new MindMap(parent, itemList)
}
