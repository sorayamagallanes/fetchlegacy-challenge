import React from 'react';
import logo from './logo.svg';
import './App.css';
import GeoLocation from './Components/Geolocation';

const App: React.FunctionComponent = () => {

  return (
    <div className="App">
      <div className="Center">
      < GeoLocation />
      </div>
    </div>
  );
}
 

export default App;
