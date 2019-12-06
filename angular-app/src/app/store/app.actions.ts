import { Action } from "@ngrx/store";

export enum AppActionTypes {
  SwipeLeft = "[App] SwipeLeft",
  SwipeRight = "[App] SwipeRight"
}

export class SwipeLeft implements Action {
  readonly type = AppActionTypes.SwipeLeft;
}

export class SwipeRight implements Action {
  readonly type = AppActionTypes.SwipeRight;
}

export type AppActions =
  | SwipeLeft
  | SwipeRight;