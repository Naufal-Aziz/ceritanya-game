import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  hitEnemy, weaponDamage, charDamage } from "../features/counter/counterSlice";

function Skillbar() {
  const dispatch = useDispatch();
  const [firstSkillCd, setFirstSkillCd] = useState(false)

  const hitDmg = useSelector(charDamage) + useSelector(weaponDamage)


  let interval1

  const skill1 = () => {
    dispatch(hitEnemy(hitDmg))
  }
  const start = () => {
    return interval1 = setInterval(skill1, 1000); 
  }

  const activateSkill1 = () => {
    setFirstSkillCd(true)
    start()
    setTimeout(() => {
      setFirstSkillCd(false);
      clearInterval(interval1)
    }, 11000);
  };

  return (
    <div className="border border-black p-2 m-2">
      <button
        disabled={firstSkillCd}
        className={`${firstSkillCd ? 'bg-red-500' : 'bg-transparent'} w-[35px] h-[35px] border border-gray-400`}
        onClick={activateSkill1}
      ></button>
    </div>
  );
}

export default Skillbar;
