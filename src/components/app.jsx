import React from "react";
import Header from "./header"
import Footer from "./footer"
import Note from "./note"
import note from "../notes"


function App(){
    return (
            <div className="main">
                <Header /> 
                
               
               { note.map((data)=>{
                    return <Note title = {data.title} content = {data.content} />
                })}
                  


                <Footer />
            </div>)
}


export default App