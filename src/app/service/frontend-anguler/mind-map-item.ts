

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

  sub(root_id: number, loop: number = 6): MindMap | undefined {

    let root = this.itemList.find(item => item.id === root_id)
    if (!root) {
      return
    }

    let result = new MindMap(root)
    let child_id: number[] = [root_id]
    let checkList = this.itemList.slice(0) // 剩下的
    for (let index = 0; index < loop; index++) {
      let newCheckList = []
      checkList.forEach(item => {
        if (child_id.includes(item.parentId)) {
          // 是子孫
          child_id.push(item.id)
          result.itemList.push(item)
        }
        else {
          newCheckList.push(item)
        }
      })
      checkList = newCheckList
    }
    return result
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
