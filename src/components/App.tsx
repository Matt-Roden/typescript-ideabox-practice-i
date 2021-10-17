import React, { useState } from 'react';
import { Idea } from './idea.model'
import './App.css';



const App: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea>()

  return (
    <div className="App">
    </div>
  );
}

export default App;
