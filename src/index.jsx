//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between 12AM and 12PM.
//or "Good Afternoon" if between                       12PM and 6PM.
//or "Good evening" if between                         6PM and 12am.


//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const headerStyle = document.querySelector(".heading");     // Saving the css color to a jsx variable that can be manipulated later



function greeting(){
    const time = new Date().getHours();
    if(time >= 0 && time < 12){
        return "Good morining";
    }

    if (time >= 12 && time < 18){
        return "Good Afternoon"; 
    }

    if(time >= 18 && time <= 23){
        return "Good evening"; 
    }
}

function styled (greeting){
    if (theGreeting == "Good morining"){
        return "red";
    }
    if (theGreeting == "Good Afternoon"){
        return "green";
    }
    if (theGreeting == "Good evening"){
        return "blue";
    }
}



const theGreeting = greeting(); 
const styledColor = styled(greeting); 


root.render(
    <React.StrictMode>
        <div>
            <h1 className = "heading" style = {{color: styledColor}}>Memorizing React Boiler Plate! {theGreeting}</h1>
            <p>Color changes based on time of day!</p>
        </div>
    </React.StrictMode>
); 