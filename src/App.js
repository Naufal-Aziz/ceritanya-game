import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { resetState, hitEnemy, totalDamage, upgradeWeapon, weaponLevel, weaponUpgradePrice, money } from './features/counter/counterSlice';
import Header from './components/Header'
import Character from './features/character/Character';
import Enemy from './features/enemy/Enemy';

function App() {
  const hitDamage = useSelector(totalDamage)
  const weaponLv = useSelector(weaponLevel)
  const upgradePrice = useSelector(weaponUpgradePrice)
  const charMoney = useSelector(money)

  const dispatch = useDispatch()

  const dealDamage = () => {
    dispatch(hitEnemy(hitDamage))
  }

  const resetGame = () => {
    dispatch(resetState())
  }

  const upWeapon = () => {
    if(charMoney < upgradePrice) {
      return
    } else {
      dispatch(upgradeWeapon(upgradePrice))
    }
  }

  return (
    <>
    <Header />
    <div className='flex px-2 gap-2'>
      <Character />
      <Enemy />
    </div>
    <div className='flex h-[400px] border border-black m-2 items-center justify-center' onClick={dealDamage}>
      <h1>CLICK HERE</h1>
    </div>
    <div className='flex flex-col items-center border border-black mx-2 p-2'>
      <p>Lv.{weaponLv}</p>
      <button onClick={upWeapon} className="p-2 bg-gray-400 rounded-lg text-white">UPGRADE WEAPON for ${upgradePrice}</button>
    </div>
    <div>
      <button onClick={resetGame} className="border border-gray-300 bg-gray-300 p-2">RESET GAME</button>
    </div>
    </>
  );
}

export default App;
