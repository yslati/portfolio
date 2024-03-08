import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface DisplayState {
    value: string
}

const initialState: DisplayState = {
    value: "/luffy.jpg",
}

export const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        setDisplay: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        resetDisplay: (state) => {
            state.value = "/luffy.jpg"
        },
    },
})

export const { setDisplay, resetDisplay } = displaySlice.actions
export const selectDisplay = (state: RootState) => state.display.value
export default displaySlice.reducer 