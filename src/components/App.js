import Wheel from "./wheel";
import Controller from "./controller";
import { useState } from "react";

function App() {

  const [menuType, setMenu] = useState({ type: "" });

  function onSelec(){
    let id = document.getElementsByClassName('high-light')[0].id;
    setMenu({ type: id });
  }

  function menuSelec(){
    let mType = menuType.type;
    if(mType === "all-songs" || mType === "artists" || mType === "albums" ) {
      setMenu({type:"music"});
      return;
    }
    setMenu({type:""});
  }

  return (
    <div className="App">
      <Controller selectMenu={menuType.type} />
      <Wheel onSelect={onSelec} menuSelect={menuSelec} />
    </div>
  );
}

export default App;
