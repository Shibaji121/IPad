import React from "react";
import Menu from "./menu";
import CoverFlow from "./CoverFlow";
import MusicPlayer from './MusicPlayer';
import Games from './Games';
import Settings from './Settings';
import AllSongs from './AllSongs';
import Artists from './Artists';
import Albums from './Albums';

export default function Controller(props) {


    let jsxVal;
    if(props.selectMenu === "")
    {
        jsxVal = <Menu />
    }
    else if(props.selectMenu === "cover-flow")
    {
        jsxVal = <CoverFlow />
    }
    else if(props.selectMenu === "music")
    {
        jsxVal = <MusicPlayer />
    }
    else if(props.selectMenu === "games")
    {
        jsxVal = <Games />
    }
    else if(props.selectMenu === "settings")
    {
        jsxVal = <Settings />
    }
    else if(props.selectMenu === "artists")
    {
        jsxVal = <Artists />
    }
    else if(props.selectMenu === "albums")
    {
        jsxVal = <Albums />
    }
    else if(props.selectMenu === "all-songs")
    {
        jsxVal = <AllSongs />
    }



    return(
        <div id="screen">
            {jsxVal}
        </div>
    );
}