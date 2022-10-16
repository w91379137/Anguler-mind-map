import { MindMapItem } from "src/app/service/frontend-anguler/mind-map-item";

const ItemGap = 150
export class MindMapItemViewModel {

  // 有一個 item

  childCount = 0 // 有幾個小孩

  // 本身位置
  // x = Math.random() * 1000
  // y = Math.random() * 1000
  x = 0
  y = 0
  childIndex = 0 // 他是第幾個小孩

  // 本身可分配方向 (防止child 相撞)
  start_theta = 0
  end_thata = 360

  get id(): number {
    return this.item.id
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor(public item: MindMapItem) { }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

}

export class MindMapViewModel {

  // 希望輻射狀展開
  itemVMList: MindMapItemViewModel[] = [];

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() {}

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
  updatePosition(root_id: number) {

    let root = this.itemVMList.find(itemVM => itemVM.id === root_id)
    root.x = 300
    root.y = 300

    // 讓大家找好 有幾個小孩
    this.itemVMList.forEach(child => {
      let parent = this.itemVMList.find(itemVM => itemVM.id === child.item.parentId)
      if (parent) {
        child.childIndex = parent.childCount
        parent.childCount += 1
      }
    })

    // 分配角度
    // 依照順序
    // 依照小孩個數x
    // 目前都是照順序 之後再看看 如果沒有照順序 會怎樣
    this.itemVMList.forEach(child => {
      let parent = this.itemVMList.find(itemVM => itemVM.id === child.item.parentId)
      if (parent) {
        let range = parent.end_thata - parent.start_theta
        let unit = range / parent.childCount
        child.start_theta = parent.start_theta + child.childIndex * unit
        child.end_thata = parent.start_theta + (child.childIndex + 1) * unit
      }
    })

    // 分配小孩位置
    this.itemVMList.forEach(child => {

      let parent = this.itemVMList.find(itemVM => itemVM.id === child.item.parentId)
      if (parent) {
        child.x = parent.x + Math.cos(Math.PI / 180 * child.start_theta) * ItemGap
        child.y = parent.y + Math.sin(Math.PI / 180 * child.start_theta) * ItemGap
      }
    })

    // 集體 位移

  }
}

