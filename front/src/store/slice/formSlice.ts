import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFormState, IFormStep1, IFormStep2 } from "@/types/store/form"

const initialState: IFormState = {
  step1: {
    name: "",
    lang: "",
    github: "",
    twitter: "",
    comment: ""
  },
  step2: {
    question: ""
  }
}

const formSlice = createSlice({
  name: "eventForm",
  initialState,
  reducers: {
    setStep1: (state, action: PayloadAction<IFormStep1>) => {
      Object.assign(state.step1, action.payload)
    },
    setStep2: (state, action: PayloadAction<IFormStep2>) => {
      Object.assign(state.step2, action.payload)
    }
  }
})

export const { setStep1, setStep2 } = formSlice.actions

export const formReducer = formSlice.reducer
