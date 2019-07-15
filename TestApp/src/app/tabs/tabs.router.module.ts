import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: '../products/products.module#ProductsModule'
          }
        ]
      },
      {
        path: 'services',
        children: [
          {
            path: '',
            loadChildren: '../business-services/business-services.module#BusinessServicesModule'
          }
        ]
      },
      {
        path: 'sales',
        children: [
          {
            path: '',
            loadChildren: '../sales/sales.module#SalesModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/products',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
