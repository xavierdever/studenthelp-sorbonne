import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-coddity',
  templateUrl: './coddity.component.html',
  styleUrls: ['./coddity.component.scss']
})
export class CoddityComponent implements OnInit {

  @Input() video: number;
  tmp = 5;
  url = "../../../assets/" + this.tmp + ".mp4";

  constructor() { }

  ngOnInit() {
  }


}
