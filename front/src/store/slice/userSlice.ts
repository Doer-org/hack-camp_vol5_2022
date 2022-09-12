import { IUserState } from "@/types/store/user"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IUserState = {
  id : 0,
  uid: "",
  name : "",
  lang: "",
  comment : "",
  github : "",
  twitter : "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      Object.assign(state, action.payload)
    },
  }
})

export const { setUser } = userSlice.actions

export const userReducer = userSlice.reducer