

let MindMapItemUUID = 0;
function getUUID() {
  MindMapItemUUID += 1;
  return MindMapItemUUID;
}

// ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
export class MindMap {

  constructor(
    public root: MindMapItem,
    public itemList: MindMapItem[] = [],
    ) {
      if (!this.itemList.includes(this.root)) {
        this.itemList.push(this.root)
      }
    }

  add(item: MindMapItem) {
    item.parentId = this.root.id
    this.itemList.push(item)
  }

  connect(mindMap: MindMap) {
    mindMap.root.parentId = this.root.id
    this.itemList.push(...mindMap.itemList)
  }
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

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
}
