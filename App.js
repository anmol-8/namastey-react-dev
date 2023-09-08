import React from "react";
import ReactDOM from 'react-dom/client'
import Header from "./Header";

const App = () => {
     return (
        <div>
            <Header></Header>
        </div>
     )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)
















// const heading = React.createElement("div",{id: "heading" , xyz: "zyz"} , "Hello World using React" );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);