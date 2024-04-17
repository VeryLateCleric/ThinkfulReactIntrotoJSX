import React from "react";
import ReactDOM from "react-dom";

const shirts = 4;
const pants = 6;
const website = "https://www.thinkful.com/";

const element = null;

function App(){
    const totalItems = shirts + pants;
    return (
        <main>
        <p className="paragraph">
        Purchased {shirts} shirts and {pants} pants for a total of {totalItems} items 
        </p>
        <a href={website}></a>
        </main>
    )
}

export default App;