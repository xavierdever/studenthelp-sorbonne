import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActionsSubject, Action } from "@ngrx/store";
import { takeUntil, filter } from "rxjs/operators";
import { Subject } from 'rxjs';

import { Question } from "./question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {
  @Input() question: Question;
  @Input() index: number;
}
