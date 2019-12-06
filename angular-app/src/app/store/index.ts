import { ActionReducerMap, MetaReducer } from "@ngrx/store";

import * as fromApp from "./app.reducer";

export interface State {
  app: fromApp.State;
}


export const reducers: ActionReducerMap<State> = {
  app: fromApp.appReducer
};
