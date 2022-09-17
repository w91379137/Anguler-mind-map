
export class HomeViewModel {

  itemList: MindMapItem[] = [];

  levelOf(item: MindMapItem): number {

    if (item.id < 0) {
      return 0
    }

    // 這邊不考慮 parent 自循環的情況
    let parentItem = this.itemList.find(ele => ele.id === item.parentId)
    if (!parentItem) {
      return 0
    }

    return this.levelOf(parentItem) + 1
  }
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

  result = result.concat(htmlList())

  return result;
}

function htmlList(): MindMapItem[] {
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
      child.isChecked = true
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'ngIf'})
      child.parentId = parent.id
      child.isChecked = true
      result.push(child)
    }
    {
      let child = new MindMapItem({title: 'ng-container'})
      child.parentId = parent.id
      child.isChecked = true
      result.push(child)
    }
  }

  return result
}
