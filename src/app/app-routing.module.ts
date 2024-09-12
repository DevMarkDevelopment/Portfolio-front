import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTransactionComponent} from "./add-transaction/add-transaction.component";

const routes: Routes = [{
  path: "addTransaction", component: AddTransactionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
