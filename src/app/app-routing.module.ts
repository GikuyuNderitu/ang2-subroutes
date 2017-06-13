import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import {NotesPublicComponent } from './notes/notes-public/notes-public.component';
import {NotesPersonalComponent } from './notes/notes-personal/notes-personal.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'notes', component: NotesComponent,
    children: [
      {path: 'public', component: NotesPublicComponent },
      {path: 'personal', component: NotesPersonalComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
