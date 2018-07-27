import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { JournalEntriesService } from '../services/journal-entries.service'

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  constructor(
    private journalService: JournalEntriesService,
    private activeRoute: ActivatedRoute
  ) { }

  journalEntry = []
  id: any

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.journalService.getOneEntry(this.id)
      .subscribe(entry=>{
        this.journalEntry = entry
      })
    })
  }

}
