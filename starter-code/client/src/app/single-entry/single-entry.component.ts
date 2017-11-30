import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalEntriesService } from '../../services/JournalEntries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  id:string;
  title:string;
  date:Date;
  content:string;

  constructor(private route: ActivatedRoute, private journal: JournalEntriesService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
        this.id = params['id'];
        this.journal.getEntry(this.id).subscribe(info => {
          this.content = info.content;
          this.title = info.title;
          this.date = info.date;
        });
    });
  }

}
