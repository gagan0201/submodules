import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  Data =[
    {
      type:"Primary Card ",
      color:"bg-primary"
    },
    {
      type:"Warning Card ",
      color:"bg-warning"
    },
    {
      type:"Success Card ",
      color:"bg-success"
    },
    {
      type:"Danger Card ",
      color:"bg-danger"
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
