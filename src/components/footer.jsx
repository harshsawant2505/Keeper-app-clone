import React from "react";

const d = new Date();
let year = d.getFullYear();

function Footer(){
    return <footer><p>cc {year}</p></footer>
}

export default Footer