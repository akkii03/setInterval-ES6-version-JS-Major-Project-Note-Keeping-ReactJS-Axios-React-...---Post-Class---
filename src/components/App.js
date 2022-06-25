import React, {Component, useState} from "react";
import '../styles/App.css';

export default function App() {

let str1Value = "";
let str2Value = "";
const [dis,setDis] = useState("");

function str1Fun (e){
 str1Value =  e.target.value;
}

function str2Fun (e){
  str2Value =  e.target.value;
}

function calculate () {
 let map1 = {};
 let map2 = {};
}

function clear (e) {
  setDis("");
  document.getElementById("int1").value ="";
  document.getElementById("int2").value ="";
}

function mergeInput(f,l) {
  let map1 = {};
  let map2 = {};
    for(let i=0;i<f.length;i++) {

      if(!map1[f[i]]) {
        map1[f[i]] = 1;
      }

      else{
        map1[f[i]]++;
      }
    }

    for(let i=0;i<l.length;i++) {
      if(!map2[l[i]]) {
        map2[l[i]] = 1;
      }
      else{
        map2[l[i]]++;
      }
    }
    let count = 0;
    for(let i in map1) {
      for(let j in map2) {
        if(map1[i]!=0 && map2[i]) {
          if(map2[i]) {
            map1[i]--;
            map2[i]--;
          }
        }
      }
    }
    for(let i in map1) {
      count+=map1[i];
    }

    for(let i in map2) {
      count+= map2[i];
    }

    return count%6;


}

const flames = ["Siblings","Friends","Love","Affection","Marriage","Enemy"];
function calculate () {
 
    if(str1Value.length===0 && str2Value.length===0) {
      return;
    }
     const FinalResult = mergeInput(str1Value.toLowerCase(),str2Value.toLowerCase());
    setDis(flames[FinalResult]); 
  
}

  return (
    <div id="main">
    <h3 data-testid="answer">{dis}</h3>
    <div className="input">
    <input data-testid="input1" id="int1" required onChange={str1Fun}/>
    <input data-testid="input2" id="int2" required onChange={str2Fun}/>
    </div>
  
   <div className="buttons">
    
   <button data-testid="calculate_relationship" onClick={calculate}>Calculate Relationship Future</button>
   <button data-testid="clear" onClick={clear} >clear</button>
   </div>
</div>
  )
}

