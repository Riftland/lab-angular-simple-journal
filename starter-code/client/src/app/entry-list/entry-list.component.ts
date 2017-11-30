import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../services/JournalEntries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  list:Array<any> = [];

  constructor(private journal: JournalEntriesService) { }

  ngOnInit() {
    console.log('hola');
    this.journal.getEntries()
      .subscribe(info => {
        console.log(info);
        this.list = info;
      });
      console.log(this.list);
  }

}
