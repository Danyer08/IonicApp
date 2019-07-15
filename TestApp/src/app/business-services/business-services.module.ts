import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessServicesComponent } from './business-services.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BusinessServicesComponent
  }
];

@NgModule({
  declarations: [BusinessServicesComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class BusinessServicesModule { }
