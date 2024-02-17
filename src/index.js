import React from "react"
import Reactdom from "react-dom"
import * as App from "./components/app"


Reactdom.render(<div className="">
   <App.Headers />
   <App.Notes />
   
   <App.Footers />
</div>, 
document.querySelector("#root"));
