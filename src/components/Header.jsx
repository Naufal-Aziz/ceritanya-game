import { useSelector } from "react-redux"
import { money, stage } from '../features/counter/counterSlice';

function Header() {
  let {chapter, level} = useSelector(stage)
  let userMoney = useSelector(money)


  return (
    <div className="bg-black text-white h-24 p-2 mb-2">
        <h1>CERITANYA GAME</h1>
        <h2>$ {userMoney}</h2>
        <h2>Lvl : {chapter} - {level}</h2>
    </div>
  )
}

export default Header