//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import {App} from "./component/App.jsx";

//render your react application


let contador = 0;


setInterval(function() {

    let num6 = Math.floor(contador/100000);
    let num5 = Math.floor(contador/10000);
    let num4 = Math.floor(contador/1000);
    let num3 = Math.floor(contador/100);
    let num2 = Math.floor(contador/10);
    let num1 = Math.floor(contador/1);

     contador++
    ReactDOM.render(<App val1 = {num1} val2 = {num2} val3 = {num3} val4 = {num4} val5 = {num5} val6 = {num6}  />, document.querySelector("#app"));
    
},1000)



