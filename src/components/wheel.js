import React from "react";
import ZingTouch from 'zingtouch';

// Wheels page
function Wheel(props) {

    // Onloading of full Wheel
    window.onload = function () {
        let element = document.getElementById('nav-btns');
        let region = new ZingTouch.Region(element);
        let customGes = new ZingTouch.Pan({
            threshold: 35,
            numInputs: 1,
        });
    // Applying the gesture effect to highlight the option
        region.bind(element, customGes, (e) => {
            if (e) {
                let menus = [], id="", index = 0, classList="";
                try {
                    menus = ['cover-flow', 'music', 'games', 'settings'];
                    id = document.querySelector('.high-light').id; 
                    index = menus.indexOf(id);
                    classList =document.getElementById(menus[index]).classList;
                } catch (error) {
                    menus = ['all-songs', 'artists', 'albums'];
                    id = document.querySelector('.high-light').id; 
                    index = menus.indexOf(id);
                    classList =document.getElementById(menus[index]).classList;
                }
                if(index !== menus.length -1)
                {
                    classList.remove('high-light');
                    document.getElementById(menus[index+1]).classList.add('high-light');
                }
                else {
                    document.getElementById(menus[index]).classList.remove('high-light');
                    document.getElementById(menus[0]).classList.add('high-light');
                }
            }
        },false);
    };

    // Wheels component
    return (
        <div className="outer-div">
            <div id="nav-btns">
                <div id="for-back-menu" onClick={() => props.menuSelect()}>
                    <p id="menu">
                        MENU
                    </p>
                    <p id="forward">
                        <i className="fa-solid fa-backward-fast"></i>
                    </p>
                    <p id="backward">
                        <i className="fas fa-fast-forward"></i>
                    </p>
                </div>
                <div id="play-pause" onClick={() => props.playBtn()}>
                    <i className="fas fa-play"></i>
                    <i className="fas fa-pause" style={{ paddingLeft: 4 }}></i>
                </div>
                <div onClick={() => props.onSelect()} id="inner-div"></div>
            </div>
        </div>
    );
}

export default Wheel;