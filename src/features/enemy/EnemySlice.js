import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    
};


export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = characterSlice.actions;

export const hitDamage = (state) => state.character.characterAttribute.strength * 10;


export default characterSlice.reducer;
