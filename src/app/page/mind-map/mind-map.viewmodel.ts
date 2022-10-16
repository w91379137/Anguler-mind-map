import { MindMapItem } from "src/app/service/frontend-anguler/mind-map-item";

const ItemGap = 300
export class MindMapItemViewModel {

  // 有一個 item

  childCount = 0

  // 本身位置
  // x = Math.random() * 1000
  // y = Math.random() * 1000
  x = 0
  y = 0
  childIndex = 0

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

    let child_id: number[] = [root_id]
    let root = this.itemVMList.find(itemVM => itemVM.id === root_id)
    root.x = 500
    root.y = 500

    let checkList = this.itemVMList.slice(0) // 剩下的
    for (let index = 0; index < 6; index++) {

      // 讓大家找好 有幾個小孩
      
      // 分配小孩位置

    }


    // 集體 位移

  }
}

