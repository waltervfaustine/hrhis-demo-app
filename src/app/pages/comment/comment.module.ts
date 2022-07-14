import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import { TableComponent } from './components/table/table.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { DeleteComponent } from './components/delete/delete.component';
import { InfoComponent } from './components/info/info.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CommentComponent,
    TableComponent,
    AddFormComponent,
    EditFormComponent,
    DeleteComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    SharedModule
  ]
})
export class CommentModule { }
class FaustinaModule { }

