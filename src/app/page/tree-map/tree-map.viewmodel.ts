import { MindMapItem } from "src/app/service/frontend-anguler/mind-map-item";

export class TreeMapViewModel {

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
