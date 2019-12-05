import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss']
})
export class BlogIndexComponent implements OnInit {

  loadingRequest: boolean;

  constructor() { }

  ngOnInit() {
    this.loadingRequest = true;
    console.log('Welcome to my Blog !');
    this.loadingRequest = false;
  }

}
