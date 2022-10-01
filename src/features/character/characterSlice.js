import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characterLevel: 1,
  characterAttribute: {
    strength: 1,
    agility: 1,
    intelligence: 1,
  },
  characterEquipment: {
    weaponDamage: 0,
    weaponLevel: 1,
  },
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
