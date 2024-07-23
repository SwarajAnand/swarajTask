import { useEffect, useState } from "react";
import PatternDivider from "./assets/pattern-divider-desktop.svg";
import PatternMob from "./assets/pattern-divider-mobile.svg";
import iconDice from "./assets/icon-dice.svg";

function App() {
  const [slip, setSlip] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://api.adviceslip.com/advice");
    const res = await data.json();
    setSlip(res.slip);
  };

  // console.log(slip);

  return (
    <div className=" min-h-screen flex items-center justify-center ">
      <div className="card flex flex-col text-center relative p-6 max-w-[400px] rounded-lg max-h-[400px]">
        <p className="adviceHead py-2 mb-2">ADVICE #{slip.id}</p>
        <p className="adviceText text-2xl">{`"${slip.advice}"`}</p>

        <img className="my-10" src={PatternDivider} />
        <div></div>
        <div onClick={getData} className="cursor-pointer buttonDiv p-3 max-w-fit m-auto my-4 absolute rounded-full -bottom-10 left-0 right-0">
          <img src={iconDice} />
        </div>
      </div>
    </div>
  );
}

export default App;
