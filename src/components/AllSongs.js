import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import qala from "../musicFolder/Song.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { IconContext } from "react-icons"; // for customazing the icons
import '../musicPlay.css';

export default function AllSongs() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(qala);

    const playingButton = () => {
        if (isPlaying) {
          pause(); // this will pause the audio
          setIsPlaying(false);
        } else {
          play(); // this will play the audio
          setIsPlaying(true);
        }
      };

    return(
        <div className="component">
      <h2 className="text-center">Playing Now</h2>
      <img
        className="musicCover"
        src="https://i1.sndcdn.com/artworks-000240979273-spjalx-t500x500.jpg"
      />
      <div>
        <h3 className="title text-center">Despacito</h3>
        <p className="subTitle text-center">Luis Fonsi</p>
      </div>
      <div>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
      </div>
    </div>
    );
}