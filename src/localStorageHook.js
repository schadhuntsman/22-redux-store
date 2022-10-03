import { useState } from "react";

function getSavedValue(key, initialValue) {
    const savedValue  = JSON.parse(localStorage.getItem(key))
    if (savedValue) return 
}

export default function useLocalStorage() {
   const [value, setValue] = useState()
  
   return [value, setValue]

}


import logo from './logo.svg';
import './App.css';
import React from "react";

export default function App(initialValue) {
    const [name, setName] = useState('initialValue')
  return (
    <input 
    type="text"
    value={name}
    onChange={e => setName(e.target.value)}
    />
  );
}

export default App;