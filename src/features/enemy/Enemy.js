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

  let enemyHealth = useSelector(selectCount);
  let bounty = useSelector(enemyBounty);
  let currentHealth = useSelector(currentEnemyHealth);
  let currentToCount = currentHealth ? currentHealth : enemyHealth;
  let healthPercentage = (currentToCount / enemyHealth) * 100;

  useEffect(() => {
    if (currentHealth == null) return
    if (currentHealth <= 0) {
      dispatch(enemyKilled({bounty}));
    }
  }, [currentHealth]);

  return (
    <div className="border border-gray-600 p-4 w-1/2">
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
    </div>
  );
};

export default Enemy;
