import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGDependencies } from './exports/ng.export';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...NGDependencies,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
