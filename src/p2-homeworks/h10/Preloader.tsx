import React from 'react';
import preloader from "../../assets/img/preloader.gif";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={'preloader'} style={{width: "25px", height:"25px", background: "none"}}/>
        </div>
    );
};

export default Preloader;