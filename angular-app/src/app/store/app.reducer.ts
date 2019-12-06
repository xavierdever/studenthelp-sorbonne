import {
  AppActionTypes,
  AppActions
} from "./app.actions";

export interface State {
}

export const initialState: State = {
};

export function appReducer(state = initialState, action: AppActions): State {
  switch (action.type) {

    default:
      return state;
  }
}
