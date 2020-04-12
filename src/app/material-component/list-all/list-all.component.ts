import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../../model/mhs';
import { Service1Service } from '../../service/service1.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  mhsData : Mahasiswa[]
  message : any

  constructor(private service:Service1Service) { 
    this.viewMhs()
  }

  ngOnInit(): void {
  }

  public viewMhs(){
    let resp = this.service.getAllMhs()
    resp.subscribe(
      (data)=>this.mhsData=data, err=> console.log("Ada error : !"+JSON.stringify(err)),
      () => console.log("Berhasil"))
  }

  public acc(data:Mahasiswa){
    let resp = this.service.acceptMhs(data)
    resp.subscribe(
      (data)=>{
        this.message=data
        this.viewMhs
      }
    )
  }

  public rej(data:Mahasiswa){
    let resp = this.service.rejectMhs(data)
    resp.subscribe(
      (data)=>{
        this.message=data
        this.viewMhs
      }
    )
  }

}
