import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { TransactionsComponent } from './transactions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'deposit',
    component: TransactionsComponent,
  },
];

@NgModule({
  declarations: [AddTransactionComponent, TransactionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TransactionsModule {}
