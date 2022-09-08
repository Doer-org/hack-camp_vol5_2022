import { configureStore } from "@reduxjs/toolkit"
import { formReducer } from "@/store/slice/formSlice"
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux'
import { load, save } from "redux-localstorage-simple"

export const store =  configureStore({
  reducer: {
    form: formReducer
  },
  preloadedState: load(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(save())
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
