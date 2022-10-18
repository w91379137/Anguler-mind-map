import { MindMapItem } from "src/app/service/frontend-anguler/mind-map-item";

const LayerGap = 200
const ItemGap = 10
export class MindMapItemViewModel {

  // 有一個 item
  get id(): number {
    return this.item.id
  }

  childCount = 0 // 小孩個數

  // 本身位置
  // x = Math.random() * 1000
  // y = Math.random() * 1000
  x = 0
  y = 0
  childIndex = 0 // 他是第幾個小孩

  // 本身可分配方向 (防止child 相撞)
  start_theta = 0
  end_theta = 360
  use_theta = -1

  get mid_theta(): number {
    return (this.start_theta + this.end_theta) / 2
  }
  get view_theta(): number {
    let theta = this.mid_theta % 360
    if (90 <= theta && theta <= 270) {
      return theta + 180
    }
    return theta
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
  // present
  // 家族個數
  familyCountOf(itemVM: MindMapItemViewModel): number {

    let childVMList = this.itemVMList.filter(ele => ele.item.parentId === itemVM.id)
    if (childVMList.length === 0) {
      return 1; // 自己一個
    }

    let sum = childVMList.reduce((sum, curr) => {
      return sum + this.familyCountOf(curr)
    }, 0)
    return sum + 1;
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
  // action
  updatePosition(root_id: number) {

    let root = this.itemVMList.find(itemVM => itemVM.id === root_id)
    root.x = 700
    root.y = 500

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
        if (parent.use_theta === -1) {
          parent.use_theta = parent.start_theta
        }
        let parent_familyCount = this.familyCountOf(parent)
        let child_familyCount = this.familyCountOf(child)
        // console.log(`${child.item.title}|${parent_familyCount}|${child_familyCount}`)

        let range = parent.end_theta - parent.start_theta
        let unit = range / parent_familyCount
        child.start_theta = parent.use_theta

        let end = parent.use_theta + child_familyCount * unit
        child.end_theta = end
        parent.use_theta = end
      }
    })

    // 分配小孩位置
    this.itemVMList.forEach(child => {

      let parent = this.itemVMList.find(itemVM => itemVM.id === child.item.parentId)
      if (parent) {
        let mid = child.mid_theta
        child.x = parent.x + Math.cos(Math.PI / 180 * mid) * LayerGap
        child.y = parent.y + Math.sin(Math.PI / 180 * mid) * LayerGap
      }
    })

    this.spread()

    // 中心 位移
  }

  spread() {
// 分散 位移
for (let x = 0; x < this.itemVMList.length; x++) {
  const itemVM = this.itemVMList[x];
  for (let y = 0; y < x; y++) {
    // 前輩
    const otherItemVM = this.itemVMList[y];
    let x_gap = itemVM.x - otherItemVM.x
    let x_gap_abs = Math.abs(x_gap)
    let y_gap = itemVM.y - otherItemVM.y
    let y_gap_abs = Math.abs(y_gap)
    let gap = Math.sqrt(Math.pow(x_gap, 2) + Math.pow(y_gap, 2))
    if (gap < ItemGap) {
      itemVM.x = otherItemVM.x + x_gap / x_gap_abs * ItemGap
      itemVM.y = otherItemVM.y + y_gap / y_gap_abs * ItemGap
    }
  }
}
  }
}

