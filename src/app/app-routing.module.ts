import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'comments'
  },
  {
    path: 'comments',
    loadChildren: () => import('./pages/comment/comment.module').then((m) => m.CommentModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/post/post.module').then((m) => m.PostModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/user/user.module').then((m) => m.UserModule)
  },
  {
    path: 'todos',
    loadChildren: () => import('./pages/todos/todos.module').then((m) => m.TodosModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('./pages/photo/photo.module').then((m) => m.PhotoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      preloadingStrategy: false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
