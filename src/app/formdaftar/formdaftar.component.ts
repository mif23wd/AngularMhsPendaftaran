import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../model/mhs';
import { Service1Service } from '../service/service1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formdaftar',
  templateUrl: './formdaftar.component.html',
  styleUrls: ['./formdaftar.component.css']
})
export class FormdaftarComponent implements OnInit {

  mhs1 = new Mahasiswa()
  message : any
  constructor(private service : Service1Service, private router : Router) { }

  ngOnInit(): void {
  }

  daftarMhs(){
    let resp = this.service.doInsertMhs(this.mhs1)
    resp.subscribe(
      (data)=>this.message = data
    )

    this.router.navigateByUrl('')
  }

}
