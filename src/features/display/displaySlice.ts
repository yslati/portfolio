import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface DisplayState {
    value: string,
    mobileClick: boolean
}

const initialState: DisplayState = {
    value: "/luffy.jpg",
    mobileClick: false,
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
        switchMobile: (state, action: PayloadAction<boolean>) => {
            state.mobileClick = action.payload; 
        }
    },
})

export const { setDisplay, resetDisplay, switchMobile } = displaySlice.actions
export const selectDisplay = (state: RootState) => state.display.value
export default displaySlice.reducer 