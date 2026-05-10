import React from 'react';
import CPPractice from './CPPractice';
import './index.css';

function App() {
  return (
    <div className="App">
      <CPPractice onBack={() => console.log('Back button clicked')} />
    </div>
  );
}

export default App;
