import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {deductMoney} from '../counter/counterSlice'

const initialState = localStorage.getItem('gameState') ? JSON.parse(localStorage.getItem('gameState')).characterState : {
  characterLevel: 1,
  characterAttribute: {
    strength: 2,
    agility: 1,
    intelligence: 1,
  },
  characterEquipment: {
    weaponDamage: 0,
    weaponLevel: 1,
  },
};

export const upgradeWeapon = createAsyncThunk(
  "character/upgradeWeapon",
  async (payload, thunkAPI) => {
    const money = await thunkAPI.getState().counter.money
    if (money > payload) {
      thunkAPI.dispatch(deductMoney(payload))
      return 1
    } else {
      return thunkAPI.rejectWithValue('ajos')
    }
  }
);

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(upgradeWeapon.fulfilled, (state, action) => {
        state.characterEquipment.weaponLevel += action.payload
        state.characterEquipment.weaponDamage += action.payload
      })
      .addCase(upgradeWeapon.rejected, () => {
        console.log("gapunya duit");
      });
  },
});

// export const {} = characterSlice.actions;
export const hitDamage = (state) => state.character.characterAttribute.strength + state.character.characterEquipment.weaponDamage

export default characterSlice.reducer;
