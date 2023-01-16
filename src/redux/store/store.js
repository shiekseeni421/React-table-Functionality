import { createStore, applyMiddleware } from "redux";
import { reducers } from "../../redux/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Toast } from "service/toast";
import persistReducers from "./persistReducers";
import { persistStore } from "redux-persist";

// const persistant = persistReducer();
export const store = createStore(
  persistReducers(reducers),
  applyMiddleware(thunk.withExtraArgument({ Toast, logger }))
);

export const persistor = persistStore(store);
