import { MindMapItem } from "../mind-map-item";

export function workflow(): MindMapItem[] {
  let result: MindMapItem[] = [];
  {
    let parent = new MindMapItem({title: 'workflow'})
    result.push(parent)
    {
      let child = new MindMapItem({title: 'mvvm'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'binder'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'viewmodel'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'action'})
      child.parentId = parent.id
      result.push(child)
    }
  }

  return result
}
