import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from './unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  private unitUrl = 'http://jbjusto.dyndns.org:3001/api/testclaudio/'
 // $top=20&$skip=0

 private unitUrl2 = 'http://jbjusto.dyndns.org:3001/api/testclaudio/$top=20&$skip=0'
 
 constructor(private http: HttpClient) { }

  getUnit (skip:number,top:number): Observable<Unit[]> {
   return this.http.get<Unit[]>(this.renderURL(skip,top))
  //return this.http.get<Unit[]>(this.unitUrl2)
        }

 renderURL (skip:number,top:number){
  let url = this.unitUrl;
  return url + '$top=' + top + '&$skip=' + skip;
 }
     


}
