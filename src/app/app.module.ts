import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoFormsComponent } from './to-do-forms/to-do-forms.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { NoteComponent } from './note/note.component';
import { CalComponent } from './cal/cal.component';
import { NoteContentComponent } from './note-content/note-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoFormsComponent,
    NavbarComponent,
    ShopComponent,
    NoteComponent,
    CalComponent,
    NoteContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
