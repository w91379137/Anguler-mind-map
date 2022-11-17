
import { MindMapItem, MindMap } from "../mind-map-item";

export function gitList(): MindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'git', markdown: '/assets/md/git.md'})
  itemList.push(parent)
  {
    let child = new MindMapItem({title: 'git_tutorial', markdown: '/assets/md/git_tutorial.md'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'commit', markdown: '/assets/md/commit.md'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'push', markdown: '/assets/md/push.md'})
    child.parentId = parent.id
    child.isChecked = true
    itemList.push(child)
  }
  {
    let child = new MindMapItem({title: 'pull', markdown: '/assets/md/pull.md'})
    child.parentId = parent.id
    child.isChecked = true
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

  return new MindMap(parent, itemList)
}
