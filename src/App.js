import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Character from "./features/character/Character";
import Enemy from "./features/enemy/Enemy";
import Skillbar from "./components/Skillbar";
import {hitEnemy2} from './features/counter/counterSlice'
import {upgradeWeapon} from './features/character/characterSlice'



function App() {
  const characterState = useSelector((state) => state.character) 
  const generalState = useSelector((state) => state.counter)
  const gameState = {
    characterState,
    generalState
  }
  const saveGame = () => {
    localStorage.setItem('gameState', JSON.stringify(gameState))
  }

  const dispatch = useDispatch();

  const weaponLv = useSelector((state) => state.character.characterEquipment.weaponLevel);
  const weaponPrice = useSelector((state) => state.character.characterEquipment.weaponLevel * 50);


  const dealDamage = () => {
    dispatch(hitEnemy2());
  };


  const upWeapon = () => {
      dispatch(upgradeWeapon(weaponPrice));
  };

  return (
    <div className="bg-black text-white">
      <Header />
      <div className="flex px-2 gap-2">
        <Character />
        <Enemy />
      </div>
      <Skillbar />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nisi amet odio neque architecto quia ad iusto dolore, sequi et non id, repudiandae soluta cumque minima impedit? Dicta, provident beatae.
      <div
        className="flex h-[400px] border border-gray-600 m-2 items-center justify-center"
        onClick={dealDamage}
      >
        <h1>CLICK HERE</h1>
      </div>

      <div className="flex flex-col items-center border border-gray-600 mx-2 p-2">
        <p>Lv.{weaponLv}</p>
        <button
          onClick={upWeapon}
          className="p-2 bg-gray-400 rounded-lg text-white"
        >
          UPGRADE WEAPON for ${weaponPrice}
        </button>
      </div>
      <div>
        <button
          onClick={saveGame}
          className="border border-gray-300 bg-gray-300 p-2"
        >
          SAVE GAME
        </button>
      </div>
    </div>
  );
}

export default App;
