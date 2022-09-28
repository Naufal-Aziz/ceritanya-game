import { useSelector } from "react-redux";
import { charDamage, weaponDamage } from '../counter/counterSlice'

function Character() {
  let base  = useSelector(charDamage)
  let weapon  = useSelector(weaponDamage)


  return (
    <>
      <div className="border border-gray-600 p-4 w-1/2">
        <div className="flex items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ecole_de_Goya%2C_Nain_assis_%2819%C3%A8me_si%C3%A8cle%29.jpg/170px-Ecole_de_Goya%2C_Nain_assis_%2819%C3%A8me_si%C3%A8cle%29.jpg" alt="" />
          </div>
        </div>
        <ul>
          <li>Damage : {base}</li>
          <li>Weapon Damage : {weapon}</li>
          <li>Total Damage : {base + weapon}</li>
        </ul>
      </div>
    </>
  );
}

export default Character;
