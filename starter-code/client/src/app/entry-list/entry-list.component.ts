import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { JournalEntriesService } from '../services/journal-entries.service'
 
@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  constructor(
    private journalService: JournalEntriesService,
    private router: Router
  ) { }

  journalEntries = [] 

  ngOnInit() {
    this.journalService.getJournalList()
    .subscribe(journal=>{
      this.journalEntries = journal
    })
  }

}
