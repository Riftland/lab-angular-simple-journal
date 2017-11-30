import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { JournalEntriesService } from '../services/JournalEntries.service';
import { SingleEntryComponent } from './single-entry/single-entry.component';

const routes: Routes = [
  { path: '', redirectTo: 'entries', pathMatch: 'full' },
  { path: 'entries',  component: EntryListComponent },
  { path: 'entries/:id',  component: SingleEntryComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
