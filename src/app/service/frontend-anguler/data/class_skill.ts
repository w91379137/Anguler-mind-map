import { MindMapItem, PartialMindMap } from "../mind-map-item";

export function classList(): PartialMindMap {
  let itemList: MindMapItem[] = [];

  let parent = new MindMapItem({title: 'class 課程編排'})
  itemList.push(parent)
  { // 一點
    let child = new MindMapItem({title: '準備階段'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
    // 看上次做到哪邊
    // 挑選新的目標
    // 想新的作業
  }
  { // 一點
    let child = new MindMapItem({title: '教學階段'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
    // 檢討之前作業
    // 問問題(舊)
    // 教新的
    // 問問題(新)
    // 給新的作業
  }
  { // 一點
    let child = new MindMapItem({title: '作業階段'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
    // 一個小東西做為修改
  }
  { // 一點
    let child = new MindMapItem({title: '課程列表'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
    // 目前教的課程
  }
  { // 一點
    let child = new MindMapItem({title: '改進階段'})
    child.parentId = parent.id
    child.isChecked = false
    itemList.push(child)
    // 檢視對於全局的涵蓋範圍
    // 課題重要程度研究
  }

  return {
    root: parent,
    list: itemList
  }
}
