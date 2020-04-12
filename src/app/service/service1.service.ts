import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Covid } from '../model/Covid';
import { Mahasiswa } from '../model/mhs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  readonly uri = "http://localhost:8080";
  constructor(private http: HttpClient) { }


  public getCovid() : Observable<Covid[]>{
    return this.http.get<Covid[]>(this.uri+"/listcovid")
  }

  public doInsertCovid(Covid){
    return this.http.post(this.uri+"/incovid",Covid,{responseType:'text' as 'json'});
  }
  public doUpdateCovid(Covid){
    return this.http.post(this.uri+"/upcovid",Covid,{responseType:'text' as 'json'});
  }
  public doDeleteCovid(Covid){
    return this.http.post(this.uri+"/delcovid",Covid,{responseType:'text' as 'json'});
  }
  public doGetAll(): Observable<number[]>{
    return this.http.get<number[]>(this.uri+"/viewall");
  }

  public doInsertMhs(Mahasiswa){
    return  this.http.post(this.uri+"/insert",Mahasiswa,{responseType:'text' as 'json'});
  }

  public getAllMhs(): Observable<Mahasiswa[]> {
    return this.http.get<Mahasiswa[]>(this.uri+"/admins/list")
  }

  public acceptMhs(Mahasiswa){
    return this.http.post(this.uri+"/admins/accept",Mahasiswa,{responseType:'text' as 'json'})
  }

  public rejectMhs(Mahasiswa){
    return this.http.post(this.uri+"/admins/reject",Mahasiswa,{responseType:'text' as 'json'})
  }
}
