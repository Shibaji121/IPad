import React from "react";

export default function MusicPlayer() {


    return(
        <div className="menu-screen">
            <aside>
                <div>
                    <h1 style={{ margin: '25px' }}>MUSIC</h1>
                    <ul>
                        <li id="all-songs" className="high-light">All Songs
                            <span className="hidden">
                                <i className="fas fa-chevron-right"></i>
                            </span>
                        </li>
                        <li id="artists">Artists
                            <span className="hidden">
                                <i className="fas fa-chevron-right"></i>
                            </span>
                        </li>
                        <li id="albums">Albums
                            <span className="hidden">
                                <i className="fas fa-chevron-right"></i>
                            </span>
                        </li>
                    </ul>
                </div>
            </aside>
            <img style={{width: '11.1em', height: 'inherit'}} 
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="side-Pic" />
        </div>
    );
}