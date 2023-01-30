import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "./Redusers/AppSlise"


const rootReducers = combineReducers({
  mainReducer
})

export const setupStore = () => {
  return configureStore({reducer: rootReducers})
}


export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = AppStore['dispatch']