import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  weaponDamage,
  charDamage,
  hitEnemy2,
} from "../features/counter/counterSlice";
import { firstSkill } from "../features/skills/SkillSlice";

function Skillbar() {
  const dispatch = useDispatch();
  const [firstSkillCd, setFirstSkillCd] = useState(false);

  const hitDmg = (useSelector(charDamage) + useSelector(weaponDamage))/10

  let interval1;

  const skill1 = () => {
    dispatch(hitEnemy2(hitDmg));
  };
  const start = () => {
    return (interval1 = setInterval(skill1, 0.1));
  };

  const activateSkill1 = () => {
    setFirstSkillCd(true);
    dispatch(firstSkill());
    start();
    setTimeout(() => {
      setFirstSkillCd(false);
      clearInterval(interval1);
      dispatch(firstSkill());
    }, 11000);
  };

  return (
    <div className="border border-black p-2 m-2">
      <button
        disabled={firstSkillCd}
        className={`${
          firstSkillCd ? "bg-red-500" : "bg-transparent"
        } w-[35px] h-[35px] border border-gray-400`}
        onClick={activateSkill1}
      ></button>
    </div>
  );
}

export default Skillbar;
