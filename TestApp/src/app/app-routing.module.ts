import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  {
    path: 'accounts',
    loadChildren: './accounts/accounts.module#AccountsModule'
  },
  {
    path: '**',
    redirectTo: '/accounts/login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
