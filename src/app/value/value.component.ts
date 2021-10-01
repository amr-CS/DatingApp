import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values:any;
  constructor(private httpclient:HttpClient) { }

  ngOnInit() {
    this.getValues()
  }
  getValues(){
    this.httpclient.get("https://localhost:44328/api/Values").subscribe(response=>{
      this.values=response
    },
    error=>{
console.log(console.error);
    })
    
  }
}
  



