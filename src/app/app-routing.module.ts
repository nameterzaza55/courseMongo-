import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'data-student', loadChildren: './data-student/data-student.module#DataStudentPageModule' },
  { path: 'data-list', loadChildren: './data-list/data-list.module#DataListPageModule' },
  { path: 'data-add', loadChildren: './data-add/data-add.module#DataAddPageModule' },
  { path: 'data-edit', loadChildren: './data-edit/data-edit.module#DataEditPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
