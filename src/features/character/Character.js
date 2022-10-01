import { useSelector } from "react-redux";
import {hitDamage} from "../character/characterSlice";

function Character() {
  const {characterLevel, characterAttribute, characterEquipment } = useSelector((state) => state.character)

  const charDamage = useSelector(hitDamage)

  return (
    <>
      <div className="border border-gray-600 p-4 w-1/2">
        <div className="flex items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ecole_de_Goya%2C_Nain_assis_%2819%C3%A8me_si%C3%A8cle%29.jpg/170px-Ecole_de_Goya%2C_Nain_assis_%2819%C3%A8me_si%C3%A8cle%29.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <ul>
            <li>Level: {characterLevel}</li>
            <li>Strength: {characterAttribute.strength}</li>
            <li>Agility: {characterAttribute.agility}</li>
            <li>Inteligence: {characterAttribute.intelligence}</li>
          </ul>
          <ul>
            <li>Damage : {charDamage}</li>
            <li>
              Weapon 'lv.{characterEquipment.weaponLevel}' Damage : {characterEquipment.weaponDamage}
            </li>
            <li>Total Damage :</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Character;
