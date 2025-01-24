import './App.css';
import React from 'react';
import {Ejer1} from './ejer1';
import {Ejer2} from './ejer2';
import {Ejer3} from './ejer3';
import {Ejer4} from './ejer4';
import {Ejer5} from './ejer5';
import {Ejer6} from './ejer6';

function App() {
  var lista = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  return (
    <>
    <div>
    <Ejer1></Ejer1>
    </div>
    <div>
    <Ejer2></Ejer2>
    </div>
    <div>
    <Ejer3 id={1}/> 
     <Ejer3 id={2}/> 
     <Ejer3 id={3}/> 
    </div>
    <div>
    <Ejer4></Ejer4>
    </div>
    <div>
    <Ejer5></Ejer5>
    </div>
     <Ejer6 lista={lista}></Ejer6>


    </>
  );
}

export default App;