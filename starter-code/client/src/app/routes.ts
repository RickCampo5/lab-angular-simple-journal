import {Routes} from '@angular/router'
import {AppComponent} from '../app/app.component'
import {EntryListComponent} from './entry-list/entry-list.component'
import {SingleEntryComponent} from './single-entry/single-entry.component'

export const routes: Routes = [
  
  {path: 'home', component: AppComponent},
  {path: 'entries', component: EntryListComponent},
  {path: 'detail/:id', component:SingleEntryComponent}
]