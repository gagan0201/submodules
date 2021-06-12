import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  currentProduct = 0;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentProduct = this.activatedRoute.snapshot.params.id
  }

}
