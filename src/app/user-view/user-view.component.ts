import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  currentProduct = 0;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentProduct = this.activatedRoute.snapshot.params.id
  }

}