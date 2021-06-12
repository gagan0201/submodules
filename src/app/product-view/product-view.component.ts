import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  currentProduct = 0;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentProduct = this.activatedRoute.snapshot.params.id
  }

}