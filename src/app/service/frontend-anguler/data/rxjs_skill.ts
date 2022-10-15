import { MindMapItem } from "../mind-map-item";

export function rxjsList(): MindMapItem[] {
  // https://rxjs.dev/api
  let result: MindMapItem[] = [];
  {
    let parent = new MindMapItem({title: 'rxjs'})
    result.push(parent)
    {
      let child = new MindMapItem({title: 'debounceTime'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'pipe'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'map'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'merge'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'filter'})
      child.parentId = parent.id
      result.push(child)
    }
  }

  return result
}
