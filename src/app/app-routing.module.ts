import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebsitelistComponent} from './websitelist/websitelist.component';

const routes: Routes = [
  { path: 'websites', component: WebsitelistComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
