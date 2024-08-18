//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between 12AM and 12PM.
//or "Good Afternoon" if between                       12PM and 6PM.
//or "Good evening" if between                         6PM and 12am.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")); 



function greeting(){
    const time = new Date().getHours();
    if(time >= 0 && time < 12){
        return "Good morining"
    }

    if (time >= 12 && time < 18){
        return "Good Afternoon"; 
    }

    if(time >= 18 && time <= 23){
        return "Good evening"; 
    }
}



const theGreeting = greeting(); 


root.render(
    <React.StrictMode>
        <div>
            <h1>Memorizing React Boiler Plate! {theGreeting}</h1>
        </div>
    </React.StrictMode>
); 