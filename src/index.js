import React from "react"
import Reactdom from "react-dom"
import App from "./components/app"


Reactdom.render(<div >
   <App /> 
</div>, 
document.querySelector("#root"));
