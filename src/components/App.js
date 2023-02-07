import Wheel from "./wheel";
import Controller from "./controller";
import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import Despacito from "../musicFolder/Song.mp3";

function App() {

  const [menuType, setMenu] = useState({ type: "" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });
  const [seconds, setSeconds] = useState();
  const [play, { pause, duration, sound }] = useSound(Despacito);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (menuType.type === 'all-songs') {
      if (isPlaying) {
        pause(); // this will pause the audio
        setIsPlaying(false);
      } else {
        play(); // this will play the audio
        setIsPlaying(true);
      }
    }
  };

  function onSelec() {
    let id = document.getElementsByClassName('high-light')[0].id;
    setMenu({ type: id });
  }

  function menuSelec() {
    let mType = menuType.type;
    if (mType === "all-songs" || mType === "artists" || mType === "albums") {
      setMenu({ type: "music" });
      if (isPlaying) {
        pause(); // this will pause the audio
        setIsPlaying(false);
      }
      return;
    }
    setMenu({ type: "" });
  }

  return (
    <div className="App">
      <Controller
        selectMenu={menuType.type}
        secLine={seconds}
        currTimeLine={currTime}
        duration={duration}
        sound={sound}
      />
      <Wheel onSelect={onSelec} menuSelect={menuSelec} playBtn={playingButton} />
    </div>
  );
}

export default App;
