import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActionsSubject, Action } from "@ngrx/store";
import { takeUntil, filter } from "rxjs/operators";
import { Subject } from 'rxjs';

import { AppActionTypes } from "../store/app.actions";
import { Question } from "../question/question.model";

@Component ({
	selector:'app-current-question',
	templateUrl:'./current-question.component.html'
})

export class question {
	
	currentIndex = 0;
	questions: question[] = [
		{name:"Etes vous étudiant ?"},
		{name:"Etes vous alternant ?"},
		{name:"Etes vous initial ?"},
		{name:"Etes vous 3 ?"},
		{name:"Etes vous 4 ?"},
		{name:"Etes vous boursier ?"}
	];

	ngOnInit() {
	this.actionsSubject
	  .pipe(
		filter((action: Action) => {
		  return (
			action.type === AppActionTypes.SwipeLeft ||
			action.type === AppActionTypes.SwipeRight
		  );
		}),
		takeUntil(this.ngUnsubscribe)
	  )
	  .subscribe(action => {
		if (action.type === AppActionTypes.SwipeLeft) {
		  this.reponse(AppActionTypes.SwipeLeft );
		} else if (action.type === AppActionTypes.SwipeRight) {
		  this.reponse(AppActionTypes.SwipeRight);
		}
	  });
	}
	reponse(action act) {
		let reponse = act === AppActionTypes.SwipeLeft ? "Non" : "Oui";
		//save variable reponse
		this.currentIndex++;
	}

	

}
