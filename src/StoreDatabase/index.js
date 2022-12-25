import { createStore } from "redux";
import {rootReducer} from "./rootReducer"



export const store = createStore (rootReducer);








/*


// JUST EXAMPLE
function _createStore(reducer) {
  let state = reducer();

  return {
    dispatch: (action) => {
      state = reducer(state, action);
    },
    getState: () => state
  };
}

const enhancer = compose(applyMiddleware(logger), persistState());


import { createStore, compose, applyMiddleware } from "redux";


import persistState from "redux-localstorage";
import logger from "redux-logger";
import { applyUndo, undoMiddeware } from "react-redux-undo";

import { rootReducer } from "./rootReducer";

*/
