import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-validform',
  templateUrl: './validform.component.html',
  styleUrls: ['./validform.component.css']
})
export class ValidformComponent implements OnInit {
  issubmit=false
  data = {
    fullname: '',
   username:'',
   email:''
  }
  constructor() { }
  ngOnInit(): void {

  }
  onSubmit(form: any) {
    console.log("form stored", form)
    this.issubmit=true

  }
}
