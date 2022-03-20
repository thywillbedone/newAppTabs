import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'clients',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'reservations',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: 'reservations/details',
        loadChildren: () =>
          import('../pages/reservations/reservations.module').then(
            (m) => m.ReservationsPageModule
          ),
      },
      {
        path: 'clients/details',
        loadChildren: () =>
          import('../pages/clients/clients.module').then(
            (m) => m.ClientsPageModule
          ),
      },
      {
        path: 'products/details',
        loadChildren: () =>
          import('../pages/products/products.module').then(
            (m) => m.ProductsPageModule
          ),
      },
      {
        path: 'clients/details/:id',
        loadChildren: () =>
          import('../pages/clients/edit/edit.module').then(
            (m) => m.EditPageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/reservations',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () =>
      import('../pages/not-found/not-found.module').then(
        (m) => m.NotFoundPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
