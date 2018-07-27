import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable()

export class JournalEntriesService{
    url = "http://localhost:3000/journal-entries/"
    constructor(private http:Http){}

    //get all phones
  getJournalList(){
    return this.http.get(this.url) 
      .pipe(map((res: Response)=>res.json()));          
  }
  getOneEntry(id){
    return this.http.get(this.url + id)
    .pipe(map((res: Response)=>res.json()));          
  }
}
