
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
  result = result.concat(tsList())
  result = result.concat(rxjsList())
  result = result.concat(workflow())

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

function tsList(): MindMapItem[] {
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

function rxjsList(): MindMapItem[] {
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

function workflow(): MindMapItem[] {
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

