
export class HomeViewModel {

  itemList: MindMapItem[] = [];
}

// ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

let MindMapItemUUID = 0;
function getUUID() {
  MindMapItemUUID += 1;
  return MindMapItemUUID;
}

export class MindMapItem {

  readonly id: number

  parentId = -1;
  title = '';
  isChecked = false;

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor(
    {
      title = '',
      isChecked = false
    }:
    {
      title?: string,
      isChecked?: boolean,
    }) {
      this.id = getUUID();
      this.title = title;
      this.isChecked = isChecked;
  }
}

// ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

export function getItems(): MindMapItem[] {

  let result: MindMapItem[] = [];

  {
    let parent = new MindMapItem({title: 'html'})
    result.push(parent)
    {
      let child = new MindMapItem({title: 'ngClass'})
      child.parentId = parent.id
      child.isChecked = true
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'ngStyle'})
      child.parentId = parent.id
      child.isChecked = true
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'ngFor'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'ngIf'})
      child.parentId = parent.id
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'ng-container'})
      child.parentId = parent.id
      result.push(child)
    }
  }

  return result
}
