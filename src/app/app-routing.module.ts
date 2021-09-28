import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ProductComponent } from './product.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RendertemplatesonconditionComponent } from './rendertemplates/rendertemplatesoncondition.component';
const routes: Route[] = [
  //
  // { path: '', component: ProductComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  {
    path: 'render-templates', children: [
      { path: '', component: RendertemplatesonconditionComponent },
   ]
  },
  {
    path: 'product', children: [
      { path: '', component: AddComponent },
    { path: ':Id/edit', component: EditComponent },
   ]
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
