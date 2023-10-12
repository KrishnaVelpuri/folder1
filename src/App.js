import {React, useState }  from "react";
import TextField from "@mui/material/TextField";
import List from "./List"
import Footer from './Footer'
import Body from './Body'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
    <h1>Comic & Anime</h1>
    <table align="center">
      <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="🔍Search"
        />
      <button type="submit">Search</button>
      </div>
      <List input={inputText}/>
    </div>
    <main><Body/></main>
       
    </table>
       <div><footer><Footer/></footer></div>
    </>
    
  );
}

export default App;