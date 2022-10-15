import { MindMapItem } from "../mind-map-item";

export function tsList(): MindMapItem[] {
  // https://angular.io/cli/generate
  let result: MindMapItem[] = [];
  {
    let parent = new MindMapItem({title: 'ts'})
    result.push(parent)
    {
      let child = new MindMapItem({title: 'component'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'directive'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'pipe'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'service'})
      child.parentId = parent.id
      result.push(child)
    }
  }

  return result
}
