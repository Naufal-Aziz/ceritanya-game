import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';



// const initialState = JSON.parse(localStorage.getItem('savedGame'))

const initialState = {
  money: 0,
  charDamage: 1,
  currentEnemyHealth: null,
  stage: {chapter: 1, level: 1},
  status: "idle",
  value: 10,
  weaponDamage: 0,
  weaponLevel: 1
}
// console.log(JSON.parse(localStorage.getItem('savedGame')))

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    resetState: (state) => {
      // state = resetToThis
      // localStorage.setItem('savedGame', JSON.stringify(resetToThis))
    },
    enemyKilled: (state, action) => {
      if(state.stage.level === 2) {
        state.stage.chapter += 1
        state.stage.level = 1
      } else {
        state.stage.level += 1
      }
      state.money += action.payload.bounty
      state.value = (10 * state.stage.chapter) * (state.stage.level * state.stage.chapter * 1.5)
    },
    hitEnemy: (state, action) => {
      if(state.currentEnemyHealth) {
        state.currentEnemyHealth -= action.payload
      } else {
        state.currentEnemyHealth = state.value - action.payload
      }
      // localStorage.setItem('savedGame', JSON.stringify(state))
    },
    upgradeWeapon: (state, action) => {
      state.weaponDamage += 1
      state.weaponLevel += 1
      state.money -= action.payload
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      if(state.currentEnemyHealth) {
        state.currentEnemyHealth -= action.payload
      } else {
        state.currentEnemyHealth = state.value - action.payload
      }
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { resetState, hitEnemy, incrementByAmount, enemyKilled, upgradeWeapon } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;
export const money = (state) => state.counter.money;
export const stage = (state) => state.counter.stage;
export const enemyBounty = (state) => (state.counter.stage.chapter * 10) * state.counter.stage.level * state.counter.stage.chapter
export const charDamage = (state) => state.counter.charDamage;
export const weaponLevel = (state) => state.counter.weaponLevel;
export const weaponUpgradePrice = (state) => state.counter.weaponLevel * 50;
export const weaponDamage = (state) => state.counter.weaponDamage;
export const totalDamage = (state) => state.counter.charDamage + state.counter.weaponDamage
export const currentEnemyHealth = (state) => state.counter.currentEnemyHealth;




// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;