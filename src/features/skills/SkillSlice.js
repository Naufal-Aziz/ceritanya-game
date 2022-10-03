import { createSlice } from "@reduxjs/toolkit";

// const initialState = localStorage.getItem('gameState') ? JSON.parse(localStorage.getItem('gameState')).characterState : {
//   skill
// };

const initialState = {
    firstSkill_isActive: false,
}


export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    firstSkill: (state) => {
        state.firstSkill_isActive = !state.firstSkill_isActive
    }
  },
//   extraReducers: (builder) => {
    
//   },
});

export const {firstSkill} = skillsSlice.actions;
export const hitDamage = (state) => state.character.characterAttribute.strength + state.character.characterEquipment.weaponDamage

export default skillsSlice.reducer;
