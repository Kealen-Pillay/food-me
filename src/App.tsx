import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Appbar } from './Components/Appbar';
import { FoodDashboard } from './FoodDashboard';

function App() {
  return (
    <div className="App">
      <Appbar />
      <FoodDashboard />
    </div>
  );
}

export default App;
