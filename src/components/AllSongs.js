import React from 'react';
import '../musicPlay.css';

export default function AllSongs(props) {

  const sec = props.dura / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain
  };

  return (
    <div className="component">
      <h2 className="text-center">Playing Now</h2>
      <img
        className="musicCover"
        src="https://i1.sndcdn.com/artworks-000240979273-spjalx-t500x500.jpg"
        alt='song-cover'
      />
      <div>
        <h3 className="title text-center">Despacito</h3>
        <p className="subTitle text-center">Luis Fonsi</p>
      </div>
      <div>
        <div className="time">
          <p>
            {props.cTime.min}:{props.cTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={props.dura / 1000}
          default="0"
          value={props.sec}
          className="timeline"
          onChange={(e) => {
            props.soud.seek([e.target.value]);
          }}
        />
      </div>
    </div>
  );
}