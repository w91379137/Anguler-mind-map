import { MindMapItem, MindMap } from "../mind-map-item";
import { fileList } from './file_skill';

export function WorkflowList(): MindMap {

  let itemList: MindMapItem[] = [];
  let parent = new MindMapItem({title: 'workflow'})

  let result = new MindMap(parent, itemList)

  {
    result.connect(fileList())
  }
  {
    let child = new MindMapItem({title: 'mvvm'})
    child.parentId = parent.id
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'binder'})
    child.parentId = parent.id
    itemList.push(child)
    // 單次 定時 當xxx時 重試
    // 來源 local api ws
  }
  {
    let child = new MindMapItem({title: 'viewmodel'})
    child.parentId = parent.id
    itemList.push(child)
    // 名稱設計？
  }
  {
    let child = new MindMapItem({title: 'action'})
    child.parentId = parent.id
    itemList.push(child)
    // 呼叫一般 api
  }

  // 看不到的服務

  return new MindMap(parent, itemList)
}
