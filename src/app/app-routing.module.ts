import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CalComponent } from './cal/cal.component';
import { ToDoFormsComponent } from './to-do-forms/to-do-forms.component';
import { NoteComponent } from './note/note.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: "shop",
    component: ShopComponent
  },
   {
    path: "cal",
    component: CalComponent
  },
   {
    path: "todo",
    component: ToDoFormsComponent
  },
   {
    path: "note",
    component: NoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
