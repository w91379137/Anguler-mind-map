import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeMapComponent } from './page/tree-map/tree-map.component';
import { MindMapComponent } from './page/mind-map/mind-map.component';

const routes: Routes = [
  { path: '', redirectTo: 'tree_map', pathMatch: 'full' },
  { path: 'tree_map', component: TreeMapComponent },
  { path: 'mind_map', component: MindMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
