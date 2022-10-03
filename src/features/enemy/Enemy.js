import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  enemyBounty,
  selectCount,
  currentEnemyHealth,
  enemyKilled,
} from "../counter/counterSlice";

const Enemy = () => {
  const dispatch = useDispatch();

  const {firstSkill_isActive} = useSelector(
    (state) => state.skills
  );

  let enemyHealth = useSelector(selectCount);
  let bounty = useSelector(enemyBounty);
  let currentHealth = useSelector(currentEnemyHealth);
  let currentToCount =
    currentHealth && currentHealth >= 0 ? currentHealth : enemyHealth;
  let healthPercentage = (currentToCount / enemyHealth) * 100;

  useEffect(() => {
    if (currentHealth == null) return;
    if (currentHealth <= 0) {
      dispatch(enemyKilled({ bounty }));
    }
  }, [currentHealth]);

  return (
    <div className={`${firstSkill_isActive && 'animate-shake'} border border-gray-600 p-4 w-1/2 relative`}>
      <div className="flex items-center justify-center">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ecole_de_Goya%2C_Nain_assis_%2819%C3%A8me_si%C3%A8cle%29.jpg/170px-Ecole_de_Goya%2C_Nain_assis_%2819%C3%A8me_si%C3%A8cle%29.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <ul>
          <li>Bounty : {bounty}</li>
        </ul>
      </div>
      <div>
        <p>
          {currentToCount}/{enemyHealth}
        </p>
        <div
          className="h-[20px] bg-red-500"
          style={{ width: `${healthPercentage}%` }}
        ></div>
      </div>
      {firstSkill_isActive ? (
        <div className="absolute top-4 left-56 animate-spin">
          <div className="border-4 p-12 border-red-500"></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Enemy;
