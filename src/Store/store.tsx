import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { sneakersApi } from "./Api/Api";
import mainReducer from "./Redusers/AppSlise"


const rootReducers = combineReducers({
  mainReducer,
  [sneakersApi.reducerPath]: sneakersApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: {
      rootReducers,
      middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sneakersApi.middleware)
    }
  })
}


export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = AppStore['dispatch']