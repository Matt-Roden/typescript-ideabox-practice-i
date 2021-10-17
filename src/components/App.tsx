import React, { useState } from 'react';
import { Idea } from './idea.model'
import './App.css';
import Form from './Form'
import IdeasContainer from './IdeasContainer'


const App: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea>()

  const addIdea = () => {
    
  };

  const removeIdea = () => {

  };

  return (
    <div className="App">
      <Form />
      <IdeasContainer />
    </div>
  );
}

export default App;
